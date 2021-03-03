const letterPositions = function(sentence) {
  const results = {};
  // remove all the space and punctuation characters, then lower case all the letters and split the letters in an array
  const arrLetters = sentence.replace(/[ ,.!?]/g, "").toLowerCase().split("");
  // console.log(arrLetters);
  // iterate over the the array of letters, and if the letter key is present in the results object,
  // then you = [] to add a new array with key, then you push the index number.
  for (let i = 0; i < arrLetters.length; i++) {
    if (!results[arrLetters[i]]) {
      results[arrLetters[i]] = [];
      results[arrLetters[i]].push(i);
      console.log(results);
    } else {
      results[arrLetters[i]].push(i);
    }
  }
  // console.log("my results" + results);
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
    console.log("🟢🟢🟢" + "Assertion Passed: " + arrayOne + " === " + arrayTwo);
  } else {
    console.log("🛑🛑🛑" + "Assertion Failed: " + arrayOne + " === " + arrayTwo);
  }
};

// .e to pull the e value pair.
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello my friend").e, [1, 10]);