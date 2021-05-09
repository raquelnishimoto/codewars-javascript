/*
Write a function that will find all the anagrams of a word from a list.
You will be given two inputs a word and an array with words.
Return an array of all the anagrams or an empty array if there are none.

convert the word into an object, getLetterCount:
where key is letter and value is count of occur

filter all the words where:
1. the letter value equals to value in word
2. and words length are equal.
return this list
*/

const getLetterCount = (word) => {
  return word.split('').reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;
    return acc;
  }, {});
};

const isTheLetterCountEqual = (count1, count2) => {
  for (let letter in count1) {
    if (count1[letter] !== count2[letter]) return false;
  }
  return true;
};

const anagrams_ = (word, list) => {
  const wordLetterCount = getLetterCount(word);

  return list.filter((element) => {
    return isTheLetterCountEqual(wordLetterCount, getLetterCount(element)) &&
      (word.length === element.length);
  });
};

// OPTION 2
const anagrams = (word, list) => {
  return list.filter((element) => {
    return word.split('').sort().join('') === element.split('').sort().join('');
  });
};

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// => ['aabb', 'bbaa']

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// => ['carer', 'racer']

console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));
// => []