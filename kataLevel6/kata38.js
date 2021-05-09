/*
You must concatenate the nth letter from each word to construct a new word which
should be returned as a string, where n is the position of the word in the list.

loop through all elements in the array and for each elem take the letter at idx
*/

const nthChar = (words) => words.map((curr, idx) => curr[idx]).join('');

console.log(nthChar(['yoda', 'best', 'has']));