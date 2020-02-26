// count the number of times a certain digit occurs in a number.


function digitCounter(number, digitsToCount) {
  number = number.toString();
  digitsToCount = digitsToCount.toString();
  let count = 0;
  if (number.length < 0) {
    return;
  }
  let currentNumber = number.charAt(0);
  if (currentNumber === digitsToCount) {
    count += 1;
  }
  console.log(count);
  digitCounter(number.slice(1), digitsToCount);
  return count;

}

console.log(digitCounter(79092342, 9));
// digitCounter(79092342, 9)