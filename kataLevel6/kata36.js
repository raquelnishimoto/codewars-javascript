/*
The vowel substrings in the word codewarriors are o,e,a,io.
The longest of these has a length of 2.
Given a lowercase string that has alphabetic characters only
and no spaces, return the length of the longest vowel substring.
Vowels are any of aeiou.

split string where letters are not vowels
go through each substring resulting and
get the longest substring length
*/

const solve_ = (word) => {
  return word.split(/[^aeiou]/)
    .filter((str) => str.length > 0)
    .sort((a, b) => b.length - a.length)[0].length;
};

const solve = (word) => {
  return word.split(/[^aeiou]/)
    .reduce((acc, curr) => {
      return acc >= curr.length ? acc : curr.length;
    }, 0);
};

console.log(solve("codewarriors"));
// ,2);
console.log(solve("suoidea"));
// ,3);
console.log(solve("ultrarevolutionariees"));
// ,3);
console.log(solve("strengthlessnesses"));
// ,1);
console.log(solve("cuboideonavicuare"));
// ,2);
console.log(solve("chrononhotonthuooaos"));
// ,5);
console.log(solve("iiihoovaeaaaoougjyaw"));
// ,8);