/*
** Given a string of words, you need to find the highest scoring word.
** Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
** You need to return the highest scoring word as a string.
** If two words score the same, return the word that appears earliest in the original string.
** All letters will be lowercase and all inputs will be valid.

** problem: return a word that scores the highest points -
each letter in the alphabet has a point relative to its position

** examples:
high('man i need a taxi up to ubud') === 'taxi'
high('what time are we climbing up the volcano') === 'volcano'
high('take me to semynak') === 'semynak'

** data/structure:
simple object to structure to hold mapping between letter in the alphabet and number
variable to hold the word current value
variable to hold the word with max value so far

** algorithm:
** input: string of words
** output: string with one word
** assumptions/rules: 
** if two words have the same length return the first occurence
** string of words will be lower case and valid
** 

** code:
** split the string of words
** loop trough each word 
** loop through each letter in the word
** this is the word current value = sum the values of these words - by object[char]: value
** evaluate if current value is less than or bigger than highest value
** if current value is bigger reassign highest value to current value
** if not do nothing
** return the highest value
*/

function high(string) {
  let alphabet = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6,
    g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14,
    o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21,
    v: 22, w: 23, x: 24, y: 25, z: 26
  }
  let highestScore = 0;
  let biggestWord;
  string.split(' ').forEach(word => {
    let currentScore = 0;
    word.split('').forEach(letter => {
      currentScore += alphabet[letter];
    });
    if (currentScore > highestScore) {
      highestScore = currentScore;
      biggestWord = word;
    };
  });
   return biggestWord;
}

console.log(high('man i need a taxi up to ubud') === 'taxi');
console.log(high('what time are we climbing up the volcano') === 'volcano');
console.log(high('take me to semynak') === 'semynak');