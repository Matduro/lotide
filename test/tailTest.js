const assert = require('chai').assert;
const tail = require('../tail');
// const assertEqual = require('../assertEqual');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns ['6', '7'] for ['5', '6', '7']", () => {
    assert.deepEqual(tail(['5', '6', '7']), ['6', '7']);
  });
});

// const words = ["Hello", "Lighthouse", "Labs"];
// const result = tail(words);
// console.log(`This is the words array: ${words}`)
// console.log(`The tail function on const "words" should produce "Labs" : ${tail(result)}`);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"
