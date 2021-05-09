/*
lowercase the text plit the text and filter only the letters
sort the list of letters and find the unique letters
if the unique letters sum 26 then txt is a pangram
*/

const getUniqueLetters = (list) => {
  return list.reduce((acc, curr) => {
    return acc.indexOf(curr) === -1 ? acc + curr : acc;
  }, '');
};

const panagram = (text) => {
  const listOfLetters = text.toLowerCase().split('').filter((letter) => (/[a-z]/g).test(letter)).sort();
  const uniqueLetters = getUniqueLetters(listOfLetters);
  return uniqueLetters.length === 26;
};

console.log(panagram("The quick brown fox jumps over the lazy dog.") );