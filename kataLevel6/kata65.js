/*
If we list all the natural numbers below 10 that are multiples of 3 or 5
 we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples
of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.
Also, if a number is negative, return 0(for languages that do have them)

input: number, can be positive or negative
output: the sum of all multiples of 3 or 5

algorithm:
return 0 if number is less than or equal to 0
loop through all int numbers starting from 1 up to the input (excl)
check if modulus of 3 or 5 equals 0. If yes, add it to the list.
return the sum of the list.
*/

const solution = (number) => {
  let list = [];
  if (number <= 3) return 0;
  for (let num = 3; num < number; num++) {
    if (num % 3 === 0 || num % 5 === 0) list.push(num);
  }
  return list.reduce((acc, curr) => acc + curr);
};

console.log(solution(3));

