// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // turn the ojects keys into arrays to iterate over
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);
  // if their length aren't equal then it automatically means the objects aren't equal
  if (objKeys1.length !== objKeys2.length) {
    return false;
  }
  // looing over one of the arrays, with the instances/key being used to
  //access and compare the 2 objects for their values.
  for (const key of objKeys1) {
    // console.log(object1[key] + " previous is obj1 and here is obj2 " + object2[key]);
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // console.log(object1[key], object2[key])
      const isArray = eqArrays(object1[key], object2[key]);
      if (!isArray) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
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

const assertObjectsEqual = function(actual, expected) {
  // import inspect function below
  const inspect = require('util').inspect;
  // console.log(`Actual label: ${inspect(actual)}`);
  // console.log(`Expected label: ${inspect(expected)}`);
  let isEqual = eqObjects(actual, expected);
  if (isEqual) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)} 🟢🟢🟢`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} 🛑🛑🛑`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const abc2 = { b: "2", a: "1", c: "3" };
const abc3 = { b: "2", a: "1", d: "3" };
assertObjectsEqual(abc2, abc); // passed
assertObjectsEqual(ab, ba); // passed
assertObjectsEqual(abc3, abc); // failed
assertObjectsEqual(ab, abc); // failed