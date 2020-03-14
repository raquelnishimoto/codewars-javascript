/*
** In this kata you are required to, given a string, replace every letter with its position in the alphabet.
** If anything in the text isn't a letter, ignore it and don't return it.
** return a string of numbers

** map each alphabet to a number, representing its position in the alphabet
** convert the string to toLowerCase
** remove anything that is not an alphabet letter
** loop through the string passed in as argument 
** and push to a new array the value of the alphabet object passing in each element in the string
** if the element is not a text - returning indefined - ignore it
*/

function alphabetPosition(text) {
  let alphabetPosition = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10,
    k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19,
    t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
  }

  let alphabetText = text.replace(/[^a-z]/gi, '');
  let alphaPositions = alphabetText.toLowerCase().split('').map(char => {
    if (alphabetPosition[char] !== undefined) {
      return alphabetPosition[char];
    };
  });
  return alphaPositions.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.") === "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");