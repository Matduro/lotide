/* // FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  // const stopEmoji = U+1F6D1;
  // const checkEmoji = U+2705;

  //const trueFalse = console.assert(actual, expected);
  //console.log(trueFalse);
  if (actual === expected) {
    console.log("✅✅✅" + "Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🆘🆘🆘 " + "Assertion Failed: " + actual + " !== " + expected);
  }
};
*/


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

const assertArrayEquals = (arrayOne, arrayTwo) => {
  let isEqual = eqArrays(arrayOne, arrayTwo);
  if (isEqual) {
    console.log("✅✅✅" + "Assertion Passed: " + arrayOne + " === " + arrayTwo);
  } else {
    console.log("🆘🆘🆘 " + "Assertion Failed: " + arrayOne + " === " + arrayTwo);
  }
};

assertArrayEquals([1, 2, 3], [1, 2, 3]);

/*
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 3); */