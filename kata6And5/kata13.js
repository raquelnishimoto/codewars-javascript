/*
Write a function that takes a string of braces,
and determines if the order of the braces is valid.
It should return true if the string is valid, and false if it's invalid.

algorithm:
for every openning brace, look ahead (slice) find the closing brace at:
- position multiple of 2

check if count of openning and closing are the same
*/


// const validBraces = (braces) => {
//   const openAndClose = {'(': ')', '{': '}', '[': ']'};

//   for (let idx = 0; idx < braces.length; idx++) {
//     let closingBrace = openAndClose[braces[idx]];

//     if (braces[idx].match(/\(|\{|\[/g)) {
//       let rightSide = braces.slice(idx + 1);
//       if (rightSide.indexOf(closingBrace) % 2 === 0) continue;
//       return false;
//     }
//   }
//   return true;
// };

const validBraces = (braces) => {
  const openAndClose = {'(': ')', '{': '}', '[': ']'};

  const getGroupsOfOpenBraces = braces.split('').map(brace => {
    return brace.match(/\(|\{|\[/g) ? brace : '*';
  });

  const openBraces = getGroupsOfOpenBraces.join('').split('*').filter(group => group !== '');

  const buildValidBraces = (openingBraces) => {
    const closingBraces = openingBraces.split('').reverse().map(brace => openAndClose[brace]).join('');

    return openingBraces + closingBraces;
  };

  return openBraces.map(openBrace => {
    return buildValidBraces(openBrace);
  }).join('') === braces;
};


console.log(validBraces("[(])"));
// console.log(validBraces("(})"));
console.log(validBraces("(({{[[]]}}))"));
// console.log(validBraces("()"));
// // 0, 1
// // 0, 3
// // 0, 5
// // true
console.log(validBraces("({})[]"));
// console.log(validBraces("({[]})"));
// // 1, 2
// // 1, 4
// // true
// console.log(validBraces("([{}])"));
// // 2, 3
// // 2, 5
// // // true
// console.log(validBraces("(}"));
// // // false
// console.log(validBraces("[(])"));
// // // false
// console.log(validBraces("[({})](]"));
// // false