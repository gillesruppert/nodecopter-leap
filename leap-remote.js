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
    position: hand.palmPosition,
    palm: hand.palmNormal
  };
  console.log('calibrated!', calibration);
}

function control(hand) {
  // hand#palmNormal
  // array of 3 numbers
  // 1.
  //  * 0.0 < 0.2 -> normal
  //  * 0.2 - 0.8 -> left
  //  * 0.0 < -0.6 -> right
  // 2. ?
  // 3.
  //  * -0.19 - 0.19 -> normal
  //  * 0.2 - 0.7 -> forward
  //  * -0.2 - -0.9 -> back
  //console.log('hand#palmNormal', hand.palmNormal);

  // palmPosition Y -> mm of height
  //console.log('hand#palmPosition', hand.palmPosition);
}

function processFrame(frame) {
  if (!frame.valid) return;
  if (!calibration) return calibrate(frame);
  var circleGest = getGesture(frame.gestures, 'circle');
  if (circleGest && checkGesture(circleGest)) takeoffOrLand(circleGest);

  var hand = frame.hands[0];
  if (hand) control(hand);
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
