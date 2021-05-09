/*
Find the longest substring in alphabetical order.
Example: the longest alphabetical substring
in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

input: string at least 1 char long of lowercase
output: longest substring in alphabetical order

get all possible letters in the string in asc order as array
for each letter in the string check if the index of the curr letter
is equal or greater than the previous letter,
if yes append it to the curr substring,
if not start a new substring.

sort the array of sbstrings by length and return the first element

*/

const longest = (string) => {
  const allLetters = string.split('').reduce((acc, curr) => {
    return acc.includes(curr) ? acc : [...acc, curr];
  }, []).sort();

  let substring = '';
  return string.split('').reduce((acc, curr, idx) => {
    if (allLetters.indexOf(string[idx - 1]) === -1 ||
    allLetters.indexOf(curr) >= allLetters.indexOf(string[idx - 1])) {
      substring += curr;
    } else {
      substring = curr;
    }
    return [...acc, substring];

  }, []).sort((a, b) => b.length - a.length)[0];
};

console.log(longest('asdfaaaabbbbcttavvfffffdf'));
// "aaaabbbbctt"
console.log(longest('asd'));
// as
console.log(longest('nab'));
// ab
console.log(longest('abcdeapbcdef'));
// abcde
console.log(longest('asdfbyfgiklag'));
// fgikl
console.log(longest('z'));
// z
console.log(longest('zyba'));