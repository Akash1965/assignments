/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let count = 0;
  for(const value of str) {
    if(value == 'a' || value == 'e' || value == 'i' || value == 'o' || value == 'u'|| value == 'A' || value == 'E' || value == 'I' || value == 'O' || value == 'U') {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;