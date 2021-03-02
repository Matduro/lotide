
/* const head = (array) => {
  // console.log(array[0]);
  return array[0];
};
*/
const tail = (array) => {
  return array.slice(1);
};
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅   Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🆘🆘🆘 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];

console.log(tail(words));
assertEqual(words.length, 3); // original array should still have 3 elements!
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"