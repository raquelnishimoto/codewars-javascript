/*
Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:
A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

----
split the input where there is not a letter or apostrophe
build an object where the key is the substring (lowercased) and the value is the count of occurences
sort the values in decending order
return the first three keys
*/

const getWords = (txt) => {
  return txt.split(/([^a-z|'])/gi)
    .filter((word) => (/[a-z]|'(?=[a-z])/gi).test(word));
};

const getWordCount = (list) => {
  return list.reduce((acc, curr) => {
    curr = curr.toLowerCase();
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
};

const getTopThreeWordOccurences = (listWordCount) => {
  return Object.keys(listWordCount)
    .sort((a, b) => listWordCount[b] - listWordCount[a])
    .slice(0, 3);
};

const topThreeWords = (text) => {
  const listOfWords = getWords(text);
  const wordCount = getWordCount(listOfWords);
  const topThreeWordOccurences = getTopThreeWordOccurences(wordCount);

  return topThreeWordOccurences;
};

// console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"));
// // === ['e','d','a']);

// console.log(topThreeWords("a a c b b"));
// //=== ['a','b','c']);

// console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"));
// // console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e") === ['e','ddd','aa']);

console.log(topThreeWords("  //wont won't won't "));
// // console.log(topThreeWords("  //wont won't won't ") === ["won't", "wont"]);

console.log(topThreeWords("  , e   .. "));
// === ["e"]);

console.log(topThreeWords("  ...  "));
// === []);

console.log(topThreeWords("  '  "));
// === []);

console.log(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`));
// === ['a','of','on']);