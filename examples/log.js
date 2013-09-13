// simple logging of the events emitted by the drone

var log = require('../throttle-log')(200);

var cmds = [
  'stop'
, 'takeoff'
, 'land'
, 'up'
, 'down'
, 'clockwise'
, 'counterClockwise'
, 'front'
, 'back'
, 'left'
, 'right'
, 'animate'
, 'animateLeds'
];

// basic example. Drone can hook in here (event triggers command)
var controller = require('../leap-remote');

  // iterate over all the commands and bind them to the event listeners
cmds.forEach(function (cmd) {
  controller.on(cmd, function (value, duration) {
    log(cmd, value, duration);
  });
});

// once everything is ready, start the controller
controller.start();
