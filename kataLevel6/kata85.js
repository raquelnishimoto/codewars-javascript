/*
Write a function: tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight
triple of a number at any place in num1 and also a straight double
of the same number in num2.

input: two numbers
output: 1 if there is a match and 0 if there isn't

algorithm:
for each number check if there is a match of three numbers in sequence
if yes, check if same number has a match in mum2 of two numbers in sequence
if these is true return 1 otherwhise return 0

*/

// const tripledouble = (num1, num2) => {
//   const isTripleDouble = isThereGroup(num1);

//   function isThereGroup (number) {
//     const isDouble = (num, numToTest) => {
//       return String(num).split('').some((_) => {
//         const pattern = new RegExp(`${numToTest}{2}`);
//         return String(num).match(pattern);
//       });
//     };

//     return String(number).split('').some((num) => {
//       const pattern = new RegExp(`${num}{3}`);
//       return String(number).match(pattern) && isDouble(num2, num);
//     });
//   }

//   return isTripleDouble ? 1 : 0;
// };

// refactored
const tripledouble = (num1, num2) => {
  const isTripleDouble = String(num1).split('').some((num) => {
    const patternTriple = new RegExp(`${num}{3}`);
    const patternDouble = new RegExp(`${num}{2}`);

    return String(num1).match(patternTriple) && String(num2).split('').some((_) => {
      return String(num2).match(patternDouble);
    });
  });

  return isTripleDouble ? 1 : 0;
};


console.log(tripledouble(451999277,41177722899));
//,1);
console.log(tripledouble(1222345, 12345));
//,0);
console.log(tripledouble(12345, 12345));
//,0);
console.log(tripledouble(666789, 12345667));
//,1);
console.log(tripledouble(10560002, 100));
//,1);
console.log(tripledouble(1112, 122));
//,0);