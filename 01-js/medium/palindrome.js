/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1 = str.replace(/[\.,?!]/g, '').replace(/\s/g, '');
  let word = '';
  for(let i=str1.length-1; i>=0; i--) {
    word = word + str1.charAt(i);
  }
  if(word.toUpperCase() == str1.toUpperCase())
  return true;
  else return false;
}

module.exports = isPalindrome;
