/* Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.

*/

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["ground", "control", "to", "major", "tom"];
const words3 = ["ground", "control", "to", "tom"];
const words4 = ["ground", "control", "to", "major", "mathieu"];


/* const map = words.map(w => (w));
const results1 = map(words, word => word[0]); would result in an error.
console.log("The map", map); The map [ 'ground', 'control', 'to', 'major', 'tom' ] */

const map = (array, callback) => {
  // temporary code:
  // console.log('array: ', array);
  // console.log('callback: ', callback);

  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
};

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

const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words3, word => word[0]);
const results4 = map(words4, word => word[0]);
//console.log(results1);
assertArraysEqual(results1, results2);
assertArraysEqual(results2, results3);
assertArraysEqual(results2, results4);