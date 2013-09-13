/*jshint boss: true */

var leap = require('leapjs');
var _ = require('underscore');
var direction = require('curtsy');
var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();
module.exports = emitter;

var controller, client, flying, animateProgress;

// calibrate the 1st time there is a hand
var calibration = null;

function registerClient(drone) {
  client = drone;
  client.config('general:navdata_demo', 'FALSE');
  client.on('navdata', function (navdata) {
    flying = !!navdata.droneState.flying;
  });
}

function checkGesture(gesture) {
  return gesture.progress > 1.9;
}

// get only the circle gesture from the gestures array
function getGesture(gestures, type) {
  if (!gestures.length) return;
  var types = _.pluck(gestures, 'type');
  var index = types.indexOf(type);
  if (index > -1) return gestures[index];
}


function calibrate(frame) {
  if (frame.hands.length !== 1) return;
  if (!calibrate._first) return (calibrate._first = frame);
  if ((frame.id - calibrate._first.id) < 150) return;
  var hand = frame.hands[0];
  calibrate._first = null;

  calibration = {
    ver: normalisePP(hand.palmPosition[1]),
    hor: normalisePP(hand.palmPosition[0]),

    lat: normalise(hand.palmNormal[0]),
    lon: normalise(hand.palmNormal[2])
  };
  console.log('calibrated!', calibration);
}

function resetCalibration() {
  calibration = null;
  calibrate._first = null;
  //console.log('--- calibration reset');
}

function takeoffOrLand(gesture) {
  var dir = direction(gesture).type;
  if (dir === 'clockwise' && !flying) {
    emitter.emit('takeoff');
    resetCalibration();
  } else if (dir === 'counter-clockwise' && flying) {
    emitter.emit('land');
  }
}

function hover () {
  emitter.emit('stop');
  //console.log('HOVER');
  resetCalibration();
}

// TODO: frontBack/leftRight can be partially applied into 1 function!
function frontBack(value) {
  if (isSimilar(value, arguments.callee.lastValue, 5)) return;
  arguments.callee.lastValue = value;
  var _scale = _.partial(scale, calibration.lon, 80);

  if (isSimilar(value, calibration.lon)) return emitter.emit('front', 0);
  if (value > calibration.lon) return emitter.emit('front', _scale(value));
  if (value < calibration.lon) return emitter.emit('back', _scale(value));
}

function leftRight(value) {
  if (isSimilar(value, arguments.callee.lastValue, 5)) return;
  arguments.callee.lastValue = value;
  var _scale = _.partial(scale, calibration.lat, 80);

  if (isSimilar(value, calibration.lat)) return emitter.emit('left', 0);
  if (value > calibration.lat) return emitter.emit('left', _scale(value));
  if (value < calibration.lat) return emitter.emit('right', _scale(value));
}

function upDown(value) {
  if (isSimilar(value, arguments.callee.lastValue, 1)) return;
  arguments.callee.lastValue = value;
  var _scale = _.partial(scale, calibration.ver, 20);

  if (isSimilar(value, calibration.ver, 5)) return emitter.emit('up', 0);
  if (value > calibration.ver) return emitter.emit('up', _scale(value, true));
  if (value < calibration.ver) return emitter.emit('down', _scale(value, true));
}

function turn(value) {
  if (isSimilar(value, arguments.callee.lastValue, 5)) return;
  arguments.callee.lastValue = value;
  var _scale = _.partial(scale, calibration.hor, 20);

  if (isSimilar(value, calibration.hor, 5)) return emitter.emit('clockwise', 0);
  if (value > calibration.hor) return emitter.emit('clockwise', _scale(value, true));
  if (value < calibration.hor) return emitter.emit('counterClockwise', _scale(value, true));
}

function control(hand) {
  frontBack(normalise(hand.palmNormal[2]));
  leftRight(normalise(hand.palmNormal[0]));
  turn(normalisePP(hand.palmPosition[0]));
  upDown(normalisePP(hand.palmPosition[1]));
}

function animate(punch) {
  if (punch && normalisePP(punch.palmVelocity[2]) < -100 && !animateProgress) {
    animateProgress = true;
    setTimeout(function () { animateProgress = false; }, 500);
    emitter.emit('animate', 'flipAhead', 1000);
    return true;
  }
}

function processFrame(frame) {
  if (!frame.valid) return;

  var circleGest = getGesture(frame.gestures, 'circle');
  if (circleGest && checkGesture(circleGest)) return takeoffOrLand(circleGest);

  var hand = frame.hands[0];
  var punch = frame.hands[1];

  if (animate(punch)) return;
  if (!hand) return hover();
  if (!calibration) return calibrate(frame);

  if (flying === false) return;
  control(hand);
}


function start() {
  controller = new leap.Controller({
    frameEventName: 'deviceFrame',
    enableGestures: true
  });
  controller.on('frame', processFrame);
  controller.connect();
}

// expose methods
emitter._getGesture = getGesture;
emitter.start = start;
emitter.registerClient = registerClient;

function isSimilar(value, compare, tolerance) {
  tolerance = tolerance || 10;
  return (Math.abs(value - compare) <= tolerance);
}

function isMiddle(value) {
  return (value > 450 && value < 573);
}

function normalisePP(value) {
  return parseInt(value / 10, 10);
}

function normalise(value) {
  return parseInt(100 * value, 10);
}

function scale(min, max, value, cap) {
  var v = Math.abs(value - min);
  if (cap && v > max) v = max;
  return v / max;
}
