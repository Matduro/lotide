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

const without = (source, itemsToRemove) => {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
//console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);

/* console.log(without([1, 2, 3], [1])); // => [2, 3])
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]) */
// assertArrayEquals([1, 2, 3], [1, 2, 3]);