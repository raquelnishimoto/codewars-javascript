/*
Find the greatest product of 5 consecutive digits in the given string of digits

input: string of numbers
output: interger, representing the greatest product of 5 consecutive digits

algorithm:
spliting the right side of the string into groups of 5 chars
filter the strings that have length === 5
for each substring, reduce each of the substring their products
return the max number of the list
*/

const greatestProduct = (sequenceOfNum) => {
  const groups = sequenceOfNum.split('').reduce((acc, _, idx) => {
    return [...acc, ...sequenceOfNum.slice(idx).split(/(.{5})/)];
  }, []).filter((group) => group.length === 5);

  const groupProduct = groups.map((group) => {
    return group.split('').reduce((acc, curr) => acc * Number(curr), 1);
  });

  return Math.max(...groupProduct);
};


console.log(greatestProduct("123834539327238239583"));
//, 3240, 'The method gave a wrong answer');
console.log(greatestProduct("92494737828244222221111111532909999"));
//, 5292, 'The method gave a wrong answer');
console.log(greatestProduct("92494737828244222221111111532909999"));
//, 5292);
console.log(greatestProduct("92494737828244222221111111532909999"));
//, 5292);
console.log(greatestProduct("02494037820244202221011110532909999"));
//, 0);