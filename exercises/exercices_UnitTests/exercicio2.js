const assert = require('assert');

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

const arr1 = [1, 2, 3, 4]
assert.deepStrictEqual(myIndexOf(arr1, 3), 2);
assert.deepStrictEqual(myIndexOf(arr1, 5), -1);