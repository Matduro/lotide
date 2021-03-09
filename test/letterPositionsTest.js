const assert = require('chai').assert;
const letterPositions = require('../letterPositions');



describe("#letterPositions", () => {
  it("returns [1] for the postion of 'e' in 'hello'", () => {
    
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("returns [1, 10] for the positions of 'e' in 'hello my friend'", () => {
    assert.deepEqual(letterPositions("hello my friend").e, [1, 10]);
  });
});

// returns an object with letters as keys and
// values of arrays for the positions of the letter keys in the input string
/*
"hello my friend" results in
{
  h: [ 0 ],
  e: [ 1, 10 ],
  l: [ 2, 3 ],
  o: [ 4 ],
  m: [ 5 ],
  y: [ 6 ],
  f: [ 7 ],
  r: [ 8 ],
  i: [ 9 ],
  n: [ 11 ]
}
 */