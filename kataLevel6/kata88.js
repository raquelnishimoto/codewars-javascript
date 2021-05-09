/*
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters
as input and that returns the missing letter in the array.

You will always get an valid array.
And it will be always exactly one letter be missing.
The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

algorithm:
initialise the alphabet as a string of letters
slice the alphabet where the first index at until the input length + 1
filter the letter that is not in the input array
*/

const findMissingLetter = (array) => {
  const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const startIdx = alpha.indexOf(array[0]);
  const letterSequence = alpha.slice(startIdx, startIdx + array.length + 1);

  return letterSequence.split('').filter((letter) => !array.includes(letter)).join();
};


console.log(findMissingLetter(['a','b','c','d','f']));
//, 'e');
console.log(findMissingLetter(['O','Q','R','S']));
//, 'P');
