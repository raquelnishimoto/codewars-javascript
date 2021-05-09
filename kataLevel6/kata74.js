/*
Given n, take the sum of the digits of n. If that value has more than one digit,
continue reducing in this way until a single-digit number is produced.
The input will be a non-negative integer.


input: integer
output: one digit number

algorithm:
if number is less than 9 return number
reassign number to the value of the sum of all its numbers by
converting num to string, split it and reduce (Number) until the sum of all numbers is one digit
*/

const digital_root = (number) => {
  if (number < 9 ) return number;

  number = String(number).split('').reduce((acc, curr) => (acc + Number(curr)), 0);

  return digital_root(number);
};


console.log(digital_root(16));
//, 7 )
console.log(digital_root(456));
//, 6 )
console.log(digital_root(942));
// 6
console.log(digital_root(132189));
// 6
console.log(digital_root(493193));
// 2