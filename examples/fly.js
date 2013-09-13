// simple example of making the drone fly

var arDrone = require('ar-drone');
var log = require('../throttle-log')(500);

var client = arDrone.createClient();
// make sure the client always calls disableEmergency() before taking off
var takeoff = client.takeoff;
client.takeoff = function (value) {
  this.disableEmergency();
  takeoff.call(this, value);
};

// repl for emergency...
//client.createRepl();
client.config('general:navdata_demo', 'FALSE');

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
    log(cmd, value);
    client[cmd](value, duration);
  });
});


client.once('navdata', function (navdata) {
  if (!navdata.droneState.lowBattery) {
    // once everything is ready, start the controller
    console.log('START', navdata.demo && navdata.demo.batteryPercentage, '%');
    controller.registerClient(client);
    controller.start();
  } else {
    console.log('LOW BATTERY', navdata.demo.batteryPercentage, '%');
  }
});

client.on('navdata', function (navdata) {
  if (navdata.droneState.lowBattery) {
    client.land();
  }
});
