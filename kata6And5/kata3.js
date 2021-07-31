/*
You are given an array of positive integers.
While the array has more than one element you can choose two elements
and replace them with their sum or product.

Your task is to find the maximum possible number that
can remain in the array after multiple such operations.

input: array of numbers
output: integer

algorithm:
filter all number 1 from the list of numbers
filter all number 2 from the list of numbers

//
if there are any number 1 and number 2, get the sum of all number 2 + 1,
leave the remaining 1s
//
group the list of number 1 in group of 3
sum these numbers in these groups

combine this list with the non 1 numbers
and for each number sum or multiple, keeping the one who is greater
return the result of this operation
*/

// eslint-disable-next-line max-lines-per-function
const sumOrProduct = (numbers) => {
  let listOfTwos = numbers.filter((num) => num === 2);
  let count = listOfTwos.length + 1;

  const sumOnesAndTwos = numbers
    .filter((num) => num === 1)
    .map((_) => {
      count -= 1;
      return count > 0 ? 3 : 1;
    });
  const listOfOnes = sumOnesAndTwos.filter((num) => num === 1);
  listOfTwos =
    numbers.filter((num) => num === 2).length -
      numbers.filter((num) => num === 1).length >
    0
      ? new Array(listOfTwos.length - sumOnesAndTwos.length).fill(2)
      : [];
  const listOfThrees = sumOnesAndTwos.filter((num) => num === 3);

  const sumOnesInGroupsOfThree = listOfOnes
    .join("")
    .split(/(1{3})/)
    .filter((nonEmpty) => nonEmpty !== "")
    .map((group) => {
      if (group.length < 3) return group.split("").map((one) => Number(one));
      return group.split("").reduce((acc, curr) => Number(acc) + Number(curr));
    });

  const onesAndThrees = listOfThrees.concat(
    sumOnesInGroupsOfThree.flatMap((group) => group)
  );

  const nonOnesOrTwos = numbers.filter((num) => num !== 1 && num !== 2);

  return nonOnesOrTwos
    .concat(onesAndThrees.flatMap((groups) => groups))
    .concat(listOfTwos)
    .sort()
    .reduce((acc, curr) => {
      return acc + curr > acc * curr ? acc + curr : acc * curr;
    });
};

console.log(sumOrProduct([3, 1, 1, 2, 2, 8, 2, 1, 2, 5]));
// expected 3240 to equal 6480

// console.log(sumOrProduct([ 6, 1, 1, 2, 2 ]));
// // 54

// console.log(sumOrProduct([1,1,5,7]));
// //,70)

console.log(sumOrProduct([1, 1, 3, 3, 3, 3, 3, 3, 5, 7, 9]));

console.log(sumOrProduct([1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 5, 7, 9]));
// 459270
// console.log(sumOrProduct([1, 3, 2]));
//,9)
// console.log(sumOrProduct([1, 2, 1]));
// //,4)
// console.log(sumOrProduct([1, 1, 1]));
// //,3)
// console.log(sumOrProduct([1]));
// //,1)
// console.log(sumOrProduct([9]));
// //,9)
// console.log(sumOrProduct([1, 1]));
// //,2)
// console.log(sumOrProduct([5, 1]));
// //,6)
// console.log(sumOrProduct([1,5,7]));
// //,42)
// console.log(sumOrProduct([1,6,5]));
// //,36)
// console.log(sumOrProduct([1, 1, 1, 1]));
// //,4)
console.log(sumOrProduct([1, 1, 1, 1, 1]));
// //,6)
// console.log(sumOrProduct([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
// //,1458)
// console.log(sumOrProduct([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
// //,972)
// console.log(sumOrProduct([1, 2, 1, 4, 5]));
// //,80)
// console.log(sumOrProduct([10, 20, 30]));
// //,6000)
