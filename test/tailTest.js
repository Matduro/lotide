const tail = require('../tail');
const assertEqual = require('../assertEqual');


const words = ["Hello", "Lighthouse", "Labs"];
const result = tail(words);
console.log(`This is the words array: ${words}`)
console.log(`The tail function on const "words" should produce "Labs" : ${tail(result)}`);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
