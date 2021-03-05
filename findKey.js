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

const findKey = (inputObject, callback) => {
  let keys = Object.keys(inputObject);
  // console.log(keys);
  for (let key of keys) {
    // console.log(inputObject[key]);
    if (callback(inputObject[key])) {
      return key;
    }
  }
  return undefined;
};
  
/*   }
  console.log()
  for (const restaurant in inputObject) {
    console.log(callback(restaurant));
    // if (callback(restaurant.stars)) {

    // }*/

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

const expectedValue = "noma";
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), expectedValue); // Assertion passed

const expectedValue2 = "elBulli";

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), expectedValue2); // Assertion Failed

const expectedValue3 = "Akaleri";

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), expectedValue3); // Assertion passed