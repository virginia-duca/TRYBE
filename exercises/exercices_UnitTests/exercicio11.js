const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

assert.deepEqual(isAbove(3, 1), true);
assert.deepEqual(isAbove(1, 3), false);