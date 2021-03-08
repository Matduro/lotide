
const assert = require('chai').assert;
// const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns ['6'] for ['5', '6', '7']", () => {
    assert.deepEqual(middle(['5', '6', '7']), ['6']);
  });
  it("returns ['6', '7'] for ['5', '6', '7', '8']", () => {
    assert.deepEqual(middle(['5', '6', '7', '8']), ['6', '7']);
  });
});

// // middle([1]); // => []
// // middle([1, 2]); // => []
// //For arrays with odd number of elements, an array containing a single middle element should be returned.
// middle([1, 2, 3]); // => [2]
// const test3 = middle([1, 2, 3, 4, 5]); // => [3]
// //For arrays with an even number of elements, an array containing the two elements in the middle should be returned
// middle([1, 2, 3, 4]); // => [2, 3]
// const test2 = middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(test2, [3, 4]);
// assertArraysEqual(test3, [3]);