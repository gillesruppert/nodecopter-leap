var _ = require('underscore');

module.exports = function(throttle) {
  throttle = throttle != null ? throttle : 500;
  return _.throttle(function () {
    console.log.apply(null, arguments);
  }, throttle);
};



