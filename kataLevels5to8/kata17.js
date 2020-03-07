/*
** Problem:
** Write a function that takes an array of strings as an argument and returns a sorted array 
** containing the same strings, ordered from shortest to longest.
** All of the strings in the array passed to your function will be different lengths, 
** so you will not have to decide how to order multiple strings of the same length.

** Examples:
** ["Telescopes", "Glasses", "Eyes", "Monocles"]
** would return the following array: ["Eyes", "Glasses", "Monocles", "Telescopes"]

** Data:
** input: array
** output: sorted array

** Algorithm:
** initialise an empty array
** convert the array to an object where the key represents the length
** sort the array based on the string length from shortest to longest
*/

function sortByLength (array) {
  let sortedWords = {};
  array.forEach((word) => {
    sortedWords[word.length] = word; 
  });
  return Object.values(sortedWords);
};

console.log(sortByLength(["Beg", "Life", "I", "To"]));
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]));
console.log(sortByLength(["Longer", "Longest", "Short"]));