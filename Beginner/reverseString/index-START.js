/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

function reverseString(text) {
  // **Method Chaining
  //   return [...text].reverse().join("");
  // **Recursive
  //   if (text === "") {
  //     return "";
  //   } else {
  //     return reverseString(text.slice(1)) + text[0];
  //   }
  // ** For loop
  let result = "";

  for (let char of text) {
    result = char + result;
    console.log(result, char);
  }

  return result;
  // ** Reduce
  //   return [...text].reduce((acc, val) => val + acc, "");
}

module.exports = reverseString;
