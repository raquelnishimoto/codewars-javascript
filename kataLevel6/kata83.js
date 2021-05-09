/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b))
that checks whether the two arrays have the "same" elements,
with the same multiplicities.
"Same" means, here, that the elements in b are the elements in a squared,
regardless of the order.

input: two arrays of the same size
output: true or false
*/

const comp = (arraya, arrayb) => {
  const numCount = (listOfNum) => {
    return listOfNum.reduce((acc, curr) => {
      acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
      return acc;
    }, {});
  };
  const countArrayA = numCount(arraya);
  const countArrayB = numCount(arrayb);

  return Object.keys(countArrayA).every((num) => {
    const multiplitity = Math.pow(num, 2);
    return countArrayB[multiplitity] &&
      countArrayA[num] === countArrayB[multiplitity];
  });
};

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1, a2));
//, true);

a3 = [121, 144, 19, 161, 19, 144, 19, 11]
a4 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

console.log(comp(a2, a4));
// // false

console.log(comp([5, 6, 10, 3, 6, 5, 5, 1, 6, 9, 7, 2, 1, 0] , [36, 4, 1, 25, 1, 81, 1, 100, 25, 49, 36, 25, 36, 9]));

console.log(comp([0, 1, 3, 6, 7, 10, 0, 0, 6, 0, 2, 4, 8, 8, 6, 1] ,  [4, 1, 0, 36, 1, 64, 100, 49, 0, 1, 64, 0, 36, 16, 9, 36]));

// console.log(comp([], null));
