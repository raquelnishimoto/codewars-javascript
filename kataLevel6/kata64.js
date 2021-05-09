/*
input: number
output: number

algorithm:
split the number, mapping through each one and
replacing the number at index with empty string
return the max value of the map
*/

const deleteDigit = (digit) => {
  const numbers = String(digit).split('');
  const numberCombination = numbers.map((_, idx) => {
    return String(digit).replace(numbers[idx], '');
  }, []);

  return Math.max(...numberCombination);
};

console.log(deleteDigit(152));
//,52)
console.log(deleteDigit(1001));
//,101)
console.log(deleteDigit(212980));
//,22980)
console.log(deleteDigit(782656));
// 82656