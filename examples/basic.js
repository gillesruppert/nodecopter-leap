// basic example. Drone can hook in here (event triggers command)
var controller = require('../index');

controller.on('takeoff', function () {
  console.log('takeoff!!!');
});

controller.on('land', function () {
  console.log('land!!!');
});

// once everything is ready, start the controller
controller.start();
