/*
Given a List [] of n integers,
find minimum number to be inserted in a list,
so that sum of all elements of list should equal the closest prime number.

input: array of integers
output: integer (min num)

algorithm:
sum the numbers in the list
take the sum and increment it by 1, checking if new number is divisible only by 1 and itself
test if prime is divisible by n starting with 2
*/

const minimumNumber = (list) => {
  const sum = list.reduce((acc, curr) => acc + curr);

  const isPrime = (num) => {
    for (let eachNum = 2; eachNum < num; eachNum++) {
      if (num % eachNum === 0) {
        return false;
      }
    }
    return true;
  };

  let prime = 0;
  while (!isPrime(sum + prime)) {
    prime += 1;
  }
  return prime;
};

// console.log(minimumNumber([3,1,2]));
// //,1);
console.log(minimumNumber([1,1]));
// //,0);
// console.log(minimumNumber([1,1]));
// //,0);
// console.log(minimumNumber([2,12,8,4,6]));
// // //,5);
// console.log(minimumNumber([50,39,49,6,17,28]));
// // //,2);
// console.log(minimumNumber([713, 6, 87, 64, 981, 76, 6, 64, 7, 589, 19, 50, 151, 4, 2, 50, 47, 4, 652, 596, 47, 7, 217, 298, 1, 19, 928, 97, 55, 67, 161, 93, 7, 7, 95, 604, 92, 8, 983, 68, 497, 8, 28, 9, 5, 11, 132, 72, 58, 266, 93, 411, 548, 42, 550, 952, 6, 872, 10, 4, 7, 37, 8, 146, 10, 8, 2, 896, 9, 41, 1, 46, 10, 27, 11, 7, 5, 67, 94, 640, 96, 9, 141, 2, 9, 68, 7]));
// // 13