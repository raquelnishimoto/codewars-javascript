/*
** The goal of this exercise is to convert a string to a new string 
** where each character in the new string is "(" if that character appears 
** only once in the original string, or ")" if that character appears 
** more than once in the original string. 
** Ignore capitalization when determining if a character is a duplicate.

** spaces count as characters
** convert srting to lower case
** loop through the array and store the chars are key
** inner loop the array and count how many times each char appears in the sring
** loop through the string and covert each char: 
** when value is bigger than 1 replace to ')'
** when value is === 1 replace to '('
*/

function duplicateEncode(word) {
  let chars = word.toLowerCase().split('');
  let charCount = {};
  
  chars.forEach(char => {
    count = 0;
    chars.forEach(element => {
      if (char === element) {
        count += 1;
      }
      charCount[char] = count;
    });
  });
  let replacement = chars.map(char => {
    return charCount[char] > 1 ? ')' : '(';
  });
  return replacement.join('');
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
