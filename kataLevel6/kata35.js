/*
Given an array of words, return an array of the number of letters
that occupy their positions in the alphabet for each word. For example,
solve(["abode","ABc","xyzD"]) = [4, 3, 1]

for each string in the given array return the count where number of
letters occupy their position in the alpha
have a the letters in the alpha sorterd in an array
go through each letter in the given string and check
if the letter at idx n is equal to the letter at the same
idx in the alpha array, if yes, increment the count
*/

const solve_ = (array) => {
  const alpha = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  return array.map((string) => {
    return string.split('').reduce((acc, curr, idx) => {
      return alpha[idx] === curr.toUpperCase() ? acc + 1 : acc + 0;
    }, 0);
  });
};

const solve = (array) => {
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return array.map((string) => string
    .toUpperCase()
    .split('')
    .filter((letter, idx) => idx === alpha.indexOf(letter)).length);
};

console.log(solve(["abode","ABc","xyzD"]));
//,[4,3,1]
console.log(solve(["abide","ABc","xyz"]));
//,[4,3,0]
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]));
//,[6, 5, 7]
console.log(solve(["encode","abc","xyzD","ABmD"]));
//,[1, 3, 1, 3];

