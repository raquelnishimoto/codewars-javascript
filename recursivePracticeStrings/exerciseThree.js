// Get the nth Fibonacci number as the return value.

/*
** Fibonacci sequence - each number is the sum of the two preceding ones, starting from 0 and 1.
F0 = 0
F1 = 1
F2 = 1
Fn = F(n-1) + F(n-2);
*/

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n < 1) {
    return 1;
  }
   return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0));
// console.log(fibonacci(1));
// console.log(fibonacci(2));
console.log(fibonacci(3));
// console.log(fibonacci(7));
// console.log(fibonacci(16));