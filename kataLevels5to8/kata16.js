/*
** Problem:
** You are going to be given a word. Your job is to return the middle character of the word. 
** If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

** Examples:
** Kata.getMiddle("test") should return "es"
** Kata.getMiddle("testing") should return "t"
** Kata.getMiddle("middle") should return "dd"
** Kata.getMiddle("A") should return "A"

** Data:
** input: string
** output: substring - made of 1 or 2 chars

** Algorithm:
** verify if string length is odd or even
** if length is odd return the char that is length / 2 rounding to lowest integer
** if length is even return the substring starting from index  ((length / 2) - 1) to (length /2) 
*/

function getMiddle(s) {
  let strLength = s.length;
  let halfString = strLength / 2;
  
  if (strLength % 2 === 0) {
    return s.substring(halfString - 1, halfString + 1);
  } else {
    return s[Math.floor(halfString)];
  }
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));