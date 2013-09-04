var leap = require('leapjs');
var _ = require('underscore');
var direction = require('curtsy');
var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();
module.exports = emitter;

// make sure we only send the takeoff and land commands once
var flying = false;


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


function processFrame(frame) {
  if (!frame.valid) return;
  var circleGest = getGesture(frame.gestures, 'circle');

  if (circleGest && checkGesture(circleGest)) takeoffOrLand(circleGest);

  var hand = frame.hands[0];

  if (!hand) return;

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


function start() {
  var controller = new leap.Controller({
    frameEventName: 'deviceFrame',
    enableGestures: true
  });
  controller.on('frame', processFrame);
  controller.connect();
}

emitter._getGesture = getGesture;
emitter.start = start;
