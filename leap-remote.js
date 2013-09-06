/*jshint boss: true */

var leap = require('leapjs');
var _ = require('underscore');
var direction = require('curtsy');
var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();
module.exports = emitter;

var controller;

// make sure we only send the takeoff and land commands once
var flying = false;

// calibrate the 1st time there is a hand
var calibration = null;


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


function takeoffOrLand(gesture) {
  var dir = direction(gesture).type;
  if (dir === 'clockwise' && !flying) {
    emitter.emit('takeoff');
    flying = !flying;
  } else if (dir === 'counter-clockwise' && flying) {
    emitter.emit('land');
    flying = !flying;
  }
}

function calibrate(frame) {
  if (frame.hands.length !== 1) return;
  if (!calibrate._first) return (calibrate._first = frame);
  if ((frame.id - calibrate._first.id) < 150) return;
  var hand = frame.hands[0];

  calibration = {
    ver: normalisePP(hand.palmPosition[1]),
    hor: normalisePP(hand.palmPosition[0]),

    lat: normalise(hand.palmNormal[0]),
    lon: normalise(hand.palmNormal[2])
  };
  console.log('calibrated!', calibration);
}

// make sure the function is not called continuously
var hover = _.throttle(function hover () {
  emitter.emit('stop');
  console.log('HOVER');
}, 500);

function frontBack(value) {
  //return console.log('frontback', value, calibration.lon);
  if (isSimilar(value, arguments.callee.lastValue, 5)) return;
  arguments.callee.lastValue = value;
  var _scale = _.partial(scale, calibration.lon, 80);

  if (isSimilar(value, calibration.lon)) return emitter.emit('front', 0, 'middle', value);
  if (value > calibration.lon) return emitter.emit('front', _scale(value));
  if (value < calibration.lon) return emitter.emit('back', _scale(value));
}

function leftRight(value) {
}

function upDown(value) {
}

function turn(value) {
}

var control = _.throttle(function control(hand) {
  frontBack(normalise(hand.palmNormal[2]));

  // hand#palmNormal
  // array of 3 numbers
  // X.
  //  * 0.0 < 0.2 -> normal
  //  * 0.2 - 0.8 -> left
  //  * 0.0 < -0.6 -> right
  // Y. N/A
  // Z.
  //  * -0.19 - 0.19 -> normal
  //  * 0.2 - 0.7 -> forward
  //  * -0.2 - -0.9 -> back
  //console.log('hand#palmNormal', hand.palmNormal);

  // palmPosition.X -> negative == counterClockwise
  // palmPosition.X -> positive == clockwise
  // palmPosition Y -> mm of height
  //console.log('hand#palmPosition', hand.palmPosition);
}, 30);


function processFrame(frame) {
  if (!frame.valid) return;
  if (!calibration) return calibrate(frame);
  var circleGest = getGesture(frame.gestures, 'circle');
  if (circleGest && checkGesture(circleGest)) takeoffOrLand(circleGest);

  var hand = frame.hands[0];
  if (hand) control(hand);
  else if (controller.frame(5).hands.length < 1) hover();
}


function start() {
  controller = new leap.Controller({
    frameEventName: 'deviceFrame',
    enableGestures: true
  });
  controller.on('frame', processFrame);
  controller.connect();
}

emitter._getGesture = getGesture;
emitter.start = start;

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

function scale(min, max, value) {
  return Math.abs(value - min) / max;
}
