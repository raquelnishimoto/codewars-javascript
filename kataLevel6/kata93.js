/*
You will be given two integers n and k and
your task is to remove k-digits from n and
return the lowest number possible,
without changing the order of the digits in n.
Return the result as a string.

input: two numbers, first is the iterable and second is the number of digits to remove
output: k - n, lowest possible number
*/


const solve = (iterable, lengthToRemove) => {
  iterable = String(iterable);
  let result = iterable;

  for (let idx = 0; idx < lengthToRemove; idx++) {
    for (let iidx = 0; iidx < iterable.length; iidx++) {
      let check = iterable.split('');
      check.splice(iidx, 1);
      check = check.join('');
      result = (Math.abs(result) < Math.abs(check)) ? result : check;
    }
    iterable = result;
  }


  return result;

};

console.log(solve(15376836, 4));
//1536836
//153836
//15336
//
// 1336
// console.log(solve(17018194, 3));
// // 01194
// console.log(solve(8324920, 2));
// // 1336
// console.log(solve(123056, 1));
// // // // //,'12056');
// console.log(solve(123056, 2) === "1056");
// // // // //,'1056');
// console.log(solve(123056, 3));
// // // // // //,'056');
// console.log(solve(123056, 4) === "05");
// // // // // //,'05');
// console.log(solve(1284569, 1) === "124569");
// // // // //,'124569');
// console.log(solve(1284569, 2) === "12456");
// // //,'12456');
// console.log(solve(1284569, 3) === "1245");
// // // //,'1245');
// console.log(solve(1284569, 4));
// // // //,'124');
// console.log(solve(10353314, 4));
// //033
// // //0314
// console.log(solve(2711870, 5));
// //10
