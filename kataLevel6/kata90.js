/*
You are given an array (which will have a length of at least 3,
  but could be very large) containing integers.
  The array is either entirely comprised of odd integers or
  entirely comprised of even integers except for a single integer N.
  Write a method that takes the array as an argument and returns this "outlier" N.

  input: an array with multiple integers
  output: an integer representing the outlier

  algorith:
  separate odd numbers from even numbers
  if for boths buckets' length either is greater that 1 and greater than 2
  return the ele in bucket that has length 1
*/

const findOutlier = (numbers) => {
  let oddNum = [];
  let evenNum = [];

  for (let idx = 0; idx < numbers.length; idx++) {
    Number(numbers[idx]) % 2 === 0
      ? evenNum.push(numbers[idx])
      : oddNum.push(numbers[idx]);
  }

  return oddNum.length === 1 ? oddNum[0] : evenNum[0];
};

console.log(findOutlier([0, 1, 2]));
//, 1)
console.log(findOutlier([1, 2, 3]));
//, 2)
console.log(findOutlier([2, 6, 8, 10, 3]));
//, 3)
console.log(findOutlier([0, 0, 3, 0, 0]));
//, 3)
console.log(findOutlier([1, 1, 0, 1, 1]));
//, 0)
