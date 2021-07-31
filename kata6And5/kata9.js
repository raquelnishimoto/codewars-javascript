/*
arithmetic progression: the dif between consecutive terms is constant

input: array of integers
output: an interger representing the num of element that had to be changed
in the array in order to create an arithmetic progression

find the constant in the expression, by counting the number of distinct def between them
take the max value of the count.

if max value is 0 then filter all numbers that are different from key of max
if max number is one then

for each num substract num and the constant - check if next number equals the return value of that expression
if no, return the value and increment count
if yes, return the value
*/

function fixProgression(arr) {
  // arr = arr.sort((a, b) => b - a);
  return arr.reduce((acc, curr, idx) => {
    if (idx + 1 < arr.length) {
      const diff = arr[idx + 1] - curr;
      acc[diff] = acc[diff] ? acc[diff] += 1 : 1;
    }
    return acc;
  }, {});

}

// console.log(fixProgression([1, 2, 3]));
// //,0) const -1

// console.log(fixProgression([1, 3, 0, 7, 9]));
// //,1) const -2

// console.log(fixProgression([1, 10, 2, 12, 3, 14, 4, 16, 5]));
// //,5)

// console.log(fixProgression([7, 7, 7, 7, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 7, 7, 7, 7, 7, 7]));
// //,2) const 0

// console.log(fixProgression([1, 12, 2, 16, 3, 20, 4, 24, 5]));

// console.log(fixProgression([2, -1, -4, 12, 1, -13, -16, -19, -6, -25]));
// [2, -1, -4, -7, -10, -13, -16, -19, -22, -25]
// //,3) const -3

// console.log(fixProgression([-1, 2, 5, 8, 11, 14, 17, -6, 23, 26, -25, 32]));
// //,2) const 3

// console.log(fixProgression([-10, -21, -20, -25, -13, 14, 2, 6, -50, -55, -60, -65, -70, -75, -80, -85, -90, -95, -100, -105, -110, -115, -120, -125, -130, 12, -24, -15, -150, 7, -160, -165, -170, -175, -180, -185, -190, -195, -200, -3, -6, -215, -220, -225, -230, -235, -240, -20, -250, -255, -260, 23, -270, -275, -280, -7, -290, -295, -300, 12, -310, -315, -320, -325, -330, -335, -17, -345, -350, -355, -360, -365, -370, -375, -2, -385, -390, -395, 2, -405, -11, -415, -420, -425, -430, -435, -440, 20, -450, -455, -460, -465, -470, -475, -480, -485, 15, -22, -500, -21]));
// // //,23)

// console.log(fixProgression([-4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -17, -4, -4, -4, -4, -4, -4, -4, 21, -4, -4, -4, 20, -4, -4, -4, -4, -4, 9, -4, -25, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, 14, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4]));
// // //,6) const 0

console.log(fixProgression([ 1, 2, 3, 5, 7, 9 ]));
console.log(fixProgression([1,2,3,4,5]));
console.log(fixProgression([1,2,3,4,5]));