/*
Given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.

input: a string with diff chars upper and lower case
output: a string of numbers representing each letter position in the alphabet

algorithm:

lowercase the string and filter only the words in it
intialise a string with the alphabet
split the filtered result mapping through each letter, for each letter
return their position in the alphabet + 1
join the result with an empty space and return that

*/

const alphabetPosition = (sentence) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const letters = sentence.toLowerCase().split('').filter((element) => {
    return (/[a-z]/g).test(element);
  });

  return letters.map(letter => alphabet.indexOf(letter) + 1).join(' ');
};


console.log(alphabetPosition("The sunset sets at twelve o' clock."));
//, "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPosition("The narwhal bacons at midnight."));
//, "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");