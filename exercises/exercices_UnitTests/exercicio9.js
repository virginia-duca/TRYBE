const assert = require('assert');

function change(param) {
  return !param;
}

let expected = change(7);
assert.ok( expected !== 7);