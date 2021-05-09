/*
Given two words, how many letters do you have to remove from them to make them anagrams?

make the two words into objects where letter is key and value is count of occ
get the abs value of the dif btw the values of each letter
return the sum of the result
*/

const getWordCount = (word) => {
  return word.split('').reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;
    return acc;
  }, {});
};

const getUniqueLetters = (word1, word2) => {
  return [...word1.split(''), ...word2.split('')].reduce((acc, curr) => {
    return acc.includes(curr) ? [...acc] : [...acc, curr];
  }, []);
};

const anagramDifference = (firstWord, secondWord) => {
  return (getUniqueLetters(firstWord, secondWord)).reduce((acc, curr) => {
    const wordCount1 = getWordCount(firstWord);
    const wordCount2 = getWordCount(secondWord);
    const diffCount = Math.abs((wordCount1[curr] || 0) - (wordCount2[curr] || 0));
    return acc + diffCount;
  }, 0);
};


console.log(anagramDifference("",""));
// //,0);
console.log(anagramDifference("a",""));
// //,1);
console.log(anagramDifference("", "a"));
// //,1);
console.log(anagramDifference("ab","a"));
// //,1);
console.log(anagramDifference("ab","cd"));
// //,4);
console.log(anagramDifference("aab","a"));
// // //,2);
console.log(anagramDifference("a","aab"));
// // //,2);
console.log(anagramDifference("ccodewars","hackerrank"));
// //,10);