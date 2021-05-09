/*
Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists,
such as the sum of the digits of n taken to the successive powers of p is equal to k * n.

input: two integers
output: one integer, representing the number that divided by x will equal to th e first input

algorithm:
take the first argum, and reduce it to their sum (pow of the second arg incremented by 1)
from this sum loop through all numbers starting with one and check if their div equal the first arg
if yes, return the divisor, if not return -1

*/

const digPow = (num, pow) => {
  const sumOfPow = String(num).split('').reduce((acc, curr, idx) => {
    return acc + Math.pow(curr, pow + idx);
  }, 0);

  return sumOfPow % num ? -1 : sumOfPow / num;

  // for (let divisor = 1; divisor <= num * pow; divisor++) {
  //   if (sumOfPow / divisor === num) return divisor;
  // }
  // return -1;
};

console.log(digPow(89, 1));
//, 1)
console.log(digPow(92, 1));
//, -1)
console.log(digPow(46288, 3));
//, 51)
console.log(digPow(695, 2));
//, 2)
console.log(digPow(10383, 6));
//, 2)