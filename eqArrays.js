// FUNCTION IMPLEMENTATION
/* const assertEqual = function(actual, expected) {
  // const stopEmoji = U+1F6D1;
  // const checkEmoji = U+2705;

  //const trueFalse = console.assert(actual, expected);
  //console.log(trueFalse);
  if (actual === expected) {
    console.log("✅✅✅" + "Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🆘🆘🆘 " + "Assertion Failed: " + actual + " !== " + expected);
  }
}; */

const eqArrays = (array1, array2) => {
  const lenOne = array1.length;
  const lenTwo = array2.length;
  if (lenOne !== lenTwo) {
    return false;
  }
  for (let i = 0; i < lenOne; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

/* console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS */

/*
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 3); */

module.exports = eqArrays;