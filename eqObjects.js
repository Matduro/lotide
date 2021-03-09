const eqArrays = require('./eqArrays');
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

module.exports = eqObjects;
/*
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

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// const abc2 = { b: "2", a: "1", c: "3" };
// const abc3 = { b: "2", a: "1", d: "3" };
// assertEqual(eqObjects(abc2, abc), true);
// assertEqual(eqObjects(abc3, abc), false);
// assertEqual(eqObjects(ab, abc), false); // => false
// console.log(eqObjects(ab, ba));
// console.log(eqObjects(abc2, abc));
// console.log(eqObjects(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false


/* const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("🟢🟢🟢 " + "Assertion Passed: " + actual + " === " + expected + " 🟢🟢🟢");
  } else {
    console.log("🛑🛑🛑 " + "Assertion Failed: " + actual + " !== " + expected + " 🛑🛑🛑");
  }
};

 */