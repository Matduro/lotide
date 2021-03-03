const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("🟢🟢🟢" + "Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑" + "Assertion Failed: " + actual + " !== " + expected);
  }
};

const countLetters = (string) => {
  const count = {};
  // remove all the space and punctuation characters, then lower case all the letters and split the letters in an array
  const arrLetters = string.replace(/[ ,.!?]/g, "").toLowerCase().split("");
  // console.log(arrLetters);
  // iterate over the the array of letters, and if the letter key is present in the count object,
  // then you += the count by 1, else you add the key value pair in the else statement.
  for (const letter of arrLetters) {
    if (count[letter]) {
      count[letter] += 1;
    } else {
      count[letter] = 1;
    }
  }
  //console.log(count);
  return count;
};

const result1 = countLetters("Lighthouse in the House!!!");

assertEqual(result1["l"], 1);
assertEqual(result1["!"], undefined);
assertEqual(result1["h"], 4);
assertEqual(result1[" "], undefined);
