/*
In this kata, you've to count lowercase letters in a given string
and return the letter count in a hash with 'letter' as key and count as 'value'.

split the string in each letter anc convert into array
initialise an empty object (this is the return value after iteration)
iterate through each letter, increment + 1
*/


// Option 1
const letterCount_ = (word) => {
  let result = {};
  word.split('').sort().forEach((letter) => {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  });

  return result;
};

// Option 2
const letterCount = (word) => {
  return word.split('').sort().reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    return acc;
  }, {});
};

console.log(letterCount("codewars"));
// {"a": 1, "c": 1, "d": 1, "e": 1, "o": 1, "r": 1, "s": 1, "w": 1};
console.log(letterCount("activity"));
//{"a": 1, "c": 1, "i": 2, "t": 2, "v": 1, y: 1};
console.log(letterCount("arithmetics"));
//{"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2};
console.log(letterCount("traveller"));
//{"a": 1, "e": 2, "l": 2, "r": 2, "t": 1, "v": 1};
console.log(letterCount("daydreamer"));
//{"a": 2, "d": 2, "e": 2, "m": 1, "r": 2, "y": 1};