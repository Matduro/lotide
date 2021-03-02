// FUNCTION IMPLEMENTATION
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

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 3);