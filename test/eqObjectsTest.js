const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const abc2 = { b: "2", a: "1", c: "3" };
const abc3 = { b: "2", a: "1", d: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

describe("#eqArrays", () => {
  it(`returns true for { a: "1", b: "2" } && { b: "2", a: "1" };`, () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it(`returns true for { b: "2", a: "1", c: "3" } && { a: "1", b: "2", c: "3" }`, () => {
    assert.strictEqual(eqObjects(abc2, abc), true);
  });
  it(`returns false for { b: "2", a: "1", c: "3" } && { b: "2", a: "1", d: "3" }`, () => {
    assert.strictEqual(eqObjects(abc2, abc3), false);
  });
  it(`returns true for { c: "1", d: ["2", 3] } && { d: ["2", 3], c: "1" }`, () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });
});

