/*
Write a function that will return the count of distinct case-insensitive alphabetic characters
and numeric digits that occur more than once in the input string.
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.


input:a string containing only numbers and alphabets
output: integer representing the number of chars that occur more than once

algorithm:
lower case and split the chars in the string
transform the string into an object where key is the char and value is count
get the keys and sum the number of times a char occurs more than once
*/

const duplicateCount = (text) => {
  const charCount = text.toLowerCase().split('').reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;
    return acc;
  }, {});

  return Object.keys(charCount).reduce((acc, curr) => {
    acc += charCount[curr] > 1 ? 1 : 0;
    return acc;
  }, 0) || 0;
};


console.log(duplicateCount(""))
//, 0);
console.log(duplicateCount("abcde"))
//, 0);
console.log(duplicateCount("aabbcde"))
//, 2);
console.log(duplicateCount("aabBcde"))
//, 2,"should ignore case");
console.log(duplicateCount("Indivisibility"))
//, 1)
console.log(duplicateCount("Indivisibilities"))
//, 2,