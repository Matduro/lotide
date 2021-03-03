const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("🟢🟢🟢" + "Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑" + "Assertion Failed: " + actual + " !== " + expected);
  }
};

const findKeyByValue = (object, value) => {
  // could instead have used Object.keys() to return an array of keys in the object
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

/* console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show")); */
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); 