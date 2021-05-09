/*
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in
the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.

input: sentence: string
output: word: string (highest score points)

initialise alpha where its index represents the letter point
split the sentence whre there is a space, map each word and
for each letter in the word sum the points they represent in alpha
return the word the the indext which has the highest score
*/

const high = (text) => {

  const words = text.split(' ');
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const wordsScore = words.map((word) => {
    return word.split('').reduce((acc, curr) => {
      return acc + alpha.indexOf(curr) + 1;
    }, 0);
  });

  return words[wordsScore.indexOf(Math.max(...wordsScore))];

};

// const wordScore = (word) => {
//   const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//   const letterScore = word.split('').reduce((acc, curr) => {
//     let score = curr.split('').reduce((sum, letter) => {
//       return sum + alpha.indexOf(letter) + 1;
//     }, 0);

//     acc[curr] = acc[curr] + score || score;
//     return acc;
//   }, {});

//   const totalScore = Object.values(letterScore)
//     .reduce((acc, curr) => acc + curr);

//   return totalScore;
// };

// const high = (sentence) => {
//   const scores = sentence.split(' ').reduce((acc, curr) => {
//     acc[curr] = wordScore(curr);
//     return acc;
//   }, {});

//   let maxScore = 0;
//   let wordMax = '';

//   for (let word in scores) {
//     if (scores[word] > maxScore) {
//       wordMax = word;
//       maxScore = scores[word];
//     }
//   }
//   return wordMax;
// };


console.log(high('man i need a taxi up to ubud'));
//, 'taxi');
console.log(high('what time are we climbing up the volcano'));
//, 'volcano');
console.log(high('take me to semynak'));
//, 'semynak');

console.log(high('massage yes'));
console.log(high('aa b'));


