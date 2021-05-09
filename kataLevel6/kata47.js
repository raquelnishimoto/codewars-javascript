/*
Write a function that takes in a string of one or more words,
and returns the same string, but with all five or more letter
words reversed (Just like the name of this Kata). Strings
passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.

split the words where there is a space, go through each one and check
whether the word has length greater or equal to 5. If yes,
reverse the letters in the string and accumulate the result with a space.
If no, accumulate the word with a space.

the reverse function will split the word and reverse the order of letters
joining it again.

*/

const spinWords = (phrase) => {
  return phrase.split(' ').reduce((acc, curr) => {
    return curr.length >= 5 ?
      `${acc} ${curr.split('').reverse().join('')}` :
      `${acc} ${curr}`;
  }, '').trim();
};

console.log(spinWords("Welcome"));
//, "emocleW");
console.log(spinWords("Hey fellow warriors"));
// , "Hey wollef sroirraw");
console.log(spinWords("This is a test"));
//, "This is a test");
console.log(spinWords("This is another test"));
//, "This is rehtona test");
console.log(spinWords("You are almost to the last test"));
//, "You are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more"));
//, "Just gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one"));
//, "ylsuoireS this is the last one");