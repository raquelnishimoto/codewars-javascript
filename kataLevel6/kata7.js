/*
** Task:
** Your task is to write a function which returns the sum of following series upto nth term(parameter).
** Rules:
** You need to round the answer to 2 decimal places and return it as String.
** If the given value is 0 then it should return 0.00.
** You will only be given Natural Numbers as arguments.
** Examples:
** SeriesSum(1) => 1 = "1.00"
** SeriesSum(2) => 1 + 1/4 = "1.25"
** SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"

** first construct the series, where
** 1st is 1
** 2nd is 1/4
** 3rd is 1/4 + 3
** 4th is 1/7 + 3

sum these numbers, round to 2 decimal places Math.round(sum * 100) / 100
*/

function SeriesSum(n) {
  let series = []
  let count = 0;
  let accumulator = 4;

  while (count < n) {
    count +=1;
    if (count === 1) {
      series.push(count)
    } else if (count === 2) {
      series.push(1 / accumulator);
    } else {
      accumulator += 3;
      series.push(1 / accumulator);
    }
  }
  let sum = series.reduce((sum, number) => {
    return sum + number;
  }, 0);
  return (Math.round(sum * 100) / 100).toFixed(2).toString();
}

// function SeriesSum(n) {
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += 1 / (3 * i + 1);
//   }
//   return sum.toFixed(2);
// }

console.log(SeriesSum(1))
console.log(SeriesSum(2))
console.log(SeriesSum(5))