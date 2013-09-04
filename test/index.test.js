var leap = require('leapjs');
var lc = require('../index');
var expect = require('expect.js');

describe('leapmotion', function () {
  describe('_getGesture()', function () {
    var getGesture = lc._getGesture;

    it('should be a function', function () {
      expect(getGesture).to.be.a('function');
    });

    it('should return undefined if the array does not contain a circle gesture', function () {
      expect(getGesture([], 'circle')).to.be(undefined);
    });

    it('should return the gesture of type if it contains one', function () {
      var gestures = [new leap.Gesture.createGesture({ type: 'circle' })];
      expect(getGesture(gestures, 'circle').type).to.be('circle');
    });

    it('should return only the gesture of type', function () {
      var gestures = [
        new leap.Gesture.createGesture({ type: 'circle' }),
        new leap.Gesture.createGesture({ type: 'swipe' }),
        new leap.Gesture.createGesture({ type: 'keyTap' })
      ];
      expect(getGesture(gestures, 'circle').type).to.be('circle');
    });
  });

});
