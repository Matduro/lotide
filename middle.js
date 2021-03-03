// try to rewrite the input parameter with (...) to account for all arrays.
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


const assertArraysEqual = (arrayOne, arrayTwo) => {
  let isEqual = eqArrays(arrayOne, arrayTwo);
  if (isEqual) {
    console.log("✅✅✅" + "Assertion Passed: " + arrayOne + " === " + arrayTwo);
  } else {
    console.log("🆘🆘🆘 " + "Assertion Failed: " + arrayOne + " === " + arrayTwo);
  }
};

const middle = (someArray) => {
  let midArray = [];
  let arrLen = someArray.length;
  let halfLen = Math.round((arrLen / 2) - 1);
  if (arrLen === 1 || arrLen === 2) {
    return midArray;
  }
  if (arrLen % 2 === 0) {
    midArray = someArray.slice(halfLen, halfLen + 2);
  } else {
    midArray = someArray.slice(halfLen, halfLen + 1);
  }
  console.log(midArray);
  return midArray;
};

// middle([1]); // => []
// middle([1, 2]); // => []
//For arrays with odd number of elements, an array containing a single middle element should be returned.
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);