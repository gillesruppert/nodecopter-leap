Nodecopter Leap Motion
======================

Control your nodecopter with a [Leap Motion](https://www.leapmotion.com/) controller.

## installation
```shell
npm install nodecopter-leap
```

## commands
The system is calibrated When you put your hand over the device.
When you remove your hand, the drone hovers.
Each time you put your hand over the device, the position is recalibrated which
takes about 1 second.

- circle finger clockwise: takeoff
- circle finger counter-clockwise: land
- forward, backward, left right work by tilting the hand
- clockwise & counter-clockwise work by moving your hand to the right/left
- do a flip by keeping one hand over the leap and punching forward with the
second hand

## run
```shell
node ./examples/fly.js
```

## test
to run the test, run `npm install` in the directory and run `npm test`.

## License
The code is licensed under the MIT license.
