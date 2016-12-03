var add = require('./implementation');

function genInt(f, n) {
  for (var i = 0; i < n; i++) {
    var x = Math.floor((Math.random() - 0.5) * 200);
    f(x);
  }
}

exports.genTest = function(test) {
  genInt(function(x) {
    genInt(function(y) {
      test.ok(add(x, y) == x + y, x + " == " + y);
    }, 100);
  }, 100);
  test.done();
};
