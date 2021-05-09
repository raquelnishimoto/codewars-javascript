/*
** Problem:
When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:

1, 10, 9, 12, 3, 4.

Then the whole pattern repeats.
Hence the following method: Multiply the right most digit of the number with the left most number in the sequence shown above,
the second right most digit to the second left most digit of the number in the sequence. 
The cycle goes on and you sum all these products. Repeat this process until the sequence of sums is stationary.

** Example:
Example: What is the remainder when 1234567 is divided by 13?
7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178
We repeat the process with 178: 8x1 + 7x10 + 1x9 = 87
and again with 87: 7x1 + 8x10 = 87

From now on the sequence is stationary and the remainder of 1234567 by 13 is the same as the remainder of 87 by 13: 9
Call thirt the function which processes this sequence of operations on an integer n (>=0). thirt will return the stationary number.
thirt(1234567) calculates 178, then 87, then 87 and returns 87.
thirt(321) calculates 48, 48 and returns 48

** Data:
input: integer
output: interger
data structure: convert to string and manipulate as array - where digits are converted to integers
recursion?

** Algorithm:
initialise a variable and assign the integers 'divisors' = 1, 10, 9, 12, 3, 4.
initialise a varible of type array called digits.
initialise a variable and assign it the remainder value of n(argument) % 13 - call it remainderOfN
convert the argument passed to the function to: a string
loop through the string, push to 'digits':
1. each char converted to integer 
2. this number is multiplied by divisor[idx] where:
- ixd is incremented after each digit
- when idx === divisors.length - 1 -> initialise idx to 0

repeate this process until:
- sum of element in digits % 13 === remainderOfN

return this number (stationary number);
*/

function thirt(n) {
  const divisors = [1, 10, 9, 12, 3, 4];
  // let digits = n.toString().split('').reverse().map(char => parseInt(char));
  // let idx = 1;
  let multiplication;

  let sumOfProducts = (numbers) => numbers
  .toString()
  .split('')
  .reverse()
  .map(char => parseInt(char)).reduce((sum, digit, idx = 1) => {
    if (idx >= divisors.length) idx = 0;
    multiplication = digit * divisors[idx];    
    idx += 1;
    return sum + multiplication;
    });
    // console.log(sumOfProducts(n));
    if (n === sumOfProducts(n)) {
      return n;
    } else {
      return thirt(sumOfProducts(n));
    };
}
console.log(thirt(1234567));
console.log(thirt(8529));
console.log(thirt(85299258));
console.log(thirt(5634));
console.log(thirt(1111111111));
console.log(thirt(987654321));