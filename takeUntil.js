/* It will take in two parameters as well:

The array to work with
The callback (which Lodash calls "predicate")
The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

To keep things simple, the callback should only be provided one value: The item in the array.
Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
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

const assertArraysEqual = (arrayOne, arrayTwo) => {
  let isEqual = eqArrays(arrayOne, arrayTwo);
  if (isEqual) {
    console.log("✅✅✅" + "Assertion Passed: " + arrayOne + " === " + arrayTwo);
  } else {
    console.log("🆘🆘🆘 " + "Assertion Failed: " + arrayOne + " === " + arrayTwo);
  }
};


const takeUntil = function(array, callback) {
  let valuesUntil = [];
  for (let value of array) {
    // if the value of the array returns a false value from the callback we continue to add to the valuesUntil
    // array, else it passes, in other words meets the value of the callback, then we break.
    if (!callback(value)) {
      //valuesUntil = valuesUntil.concat(value);
      valuesUntil.push(value);
    } else {
      break;
    }
  }
  return valuesUntil;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const expected1 = [ 1, 2, 5, 7, 2 ];
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const expected2 = [ "I've", 'been', 'to', 'Hollywood' ];
console.log(results2);

assertArraysEqual(results1, expected1);
assertArraysEqual(results2, expected2);
// Expected Output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood'];
