const assert = require('chai').assert;
// const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly');


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it("returns 1 for Jason being present once in the array", () => {
    
    assert.strictEqual(result1["Jason"], 1);
  });
  it("returns 2 for Fang being present twice in the array", () => {
    assert.strictEqual(result1["Fang"], 2);
  });
});