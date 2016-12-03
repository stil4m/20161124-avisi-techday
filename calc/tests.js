var add = require('./implementation');

exports.simpleAddition = function(test) {
    test.ok(add(1, 1) == 2, "this assertion should pass");
    test.done();
};

exports.maarten = function(test) {
    test.ok(add(1, 3) == 4, "this assertion should pass");
    test.done();
};

exports.foo = function(test) {
    test.ok(add(10000, -1) == 9999, "this assertion should pass");
    test.done();
};
