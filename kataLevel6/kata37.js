/*
Given a string of integers, return the number of odd-numbered substrings that can be formed

go through each char in the string and for each char,
slice from the curr char idx to the next char until the end of the string
for each substring check, convert it to a number and check if it is an odd num
if yes, return it in the map of the first iteration
then spread/flatten the result
*/

// Works only with small numbers
const solve_ = (numbers) => {
  return numbers.split('').reduce((acc, _, idx) => {
    const oddNumbers = numbers.split('').reduce((innerAcc, _, innerIdx) => {
      const number = Number(numbers.slice(idx, innerIdx + 1));
      return number % 2 !== 0 ? [...innerAcc, number] : [...innerAcc];
    }, []);
    return [...acc, ...oddNumbers];
  }, []).length;
};

const solve__ = (numbers) => {
  let count = 0;
  for (let leftNum = 0; leftNum < numbers.length; leftNum++) {
    for (let rightNum = 0; rightNum < numbers.length; rightNum++) {
      const subStr = numbers.slice(leftNum, rightNum + 1);
      if (Number(subStr[subStr.length - 1]) % 2 === 1 ) {
        count += 1;
      }
    }
  }
  return count;
};

const solve = (numbers) => {
  return [...numbers].reduce((acc, curr, idx) => (acc + ((Number(curr) % 2) ? idx + 1 : 0)), 0);
};

console.log(solve("1341"));
// //,7)
// console.log(solve("1357"));
// //,10)
// console.log(solve("13471"));
// //,12)
// console.log(solve("134721"));
// //,13)
// console.log(solve("1347231"));
// //,20)
// console.log(solve("13472315"));
// //,28)

console.log(solve("58419473362629755767279661283297932976257496571697374819246749883884827789268"));