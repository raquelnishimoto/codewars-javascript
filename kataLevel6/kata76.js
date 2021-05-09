/*
Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.
Task:
Place all people in alphabetical order where Mothers are followed by their children.

Algorithm:
filter all uppercased letters, they represent mothers
for each mother match all children, lowercase letter and join result
return the result
*/

const findChildren = (dancingBrigade) => {
  const mothers = dancingBrigade.split('').filter((mother) => (/[A-Z]/).test(mother)).sort();
  return mothers.reduce((acc, curr) => {
    const children = new RegExp(curr.toLowerCase(), 'g');
    acc += curr + dancingBrigade.match(children).join('');
    return acc;
  }, '');
};


//Test.expect("BbbEeee" ==
console.log(findChildren("beeeEBb"));
//Test.expect("EeeUuuWww" ==
console.log(findChildren("uwwWUueEe"));
// "AaaBbb"
console.log(findChildren("aAbaBb"));