/*
Create a function that turns a string into a Mexican Wave.
You will be passed a string and you must return that string
in an array where an uppercase letter is a person standing up.

1.The input string will always be lower case but maybe empty.

2.If the character in the string is whitespace then pass over it
as if it was an empty seat.

input: string with lowercase letters and spaces
output: array of words of length (sum of letters in input)

algorithm:
map through the input and if letter return the input capitalised at index
filter out all elements that are empty
*/

const wave = (word) => {
  return word.split('').map((char, idx) => {
    const wavedWord = word.slice(0, idx) +
    word.charAt(idx).toUpperCase() +
    word.slice(idx + 1);

    return (/[a-z]/g).test(char) ? wavedWord : '';
  }).filter((element) => (/./).test(element));
};

console.log(wave("hello"));
console.log(wave("codewars"));
console.log(wave(""));
console.log(wave("two words"));
console.log(wave(" gap "));