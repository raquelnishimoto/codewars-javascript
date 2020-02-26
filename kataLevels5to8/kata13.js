/*
** A pangram is a sentence that contains every single letter of the alphabet at least once. 
** For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
** because it uses the letters A-Z at least once (case is irrelevant).

** Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
** Ignore numbers and punctuation.

** problem: 
** passed string has to have at least one letter of the alphabet - it can have more.

** example: "The quick brown fox jumps over the lazy dog"

** data: 
** initialize an array with all letters of the alphabet
input: string
output: boolean

** algorithm:
loop thorough the array of letters in the alphabet
convert all letter in the sentence to upper case
check if for each alpha letter there is at least one occurence in the sentence
if yes do nothing at the end return true
if no return false
*/

// Option 1
function isPangram1(string){
  const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  let allLetters = alphabet.map(letter => {
    return string.toLowerCase().includes(letter);
  });
  return !allLetters.includes(false);
}

// Option 2
function isPangram(string) {
  string = string.toLowerCase();
  return [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
      ].every(letter => {
        return string.indexOf(letter) !== -1;
      });
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));