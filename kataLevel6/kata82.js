/*
Write a function toWeirdCase that accepts a string,
and returns the same string with all even indexed characters in each word upper cased,
and all odd indexed characters in each word lower cased.
The indexing just explained is zero based, so the zero-ith index is even,
therefore that character should be upper cased.

input: string containing only letters and spaces
output: same string, even idx uppercased and odd idx lowercased

algorithm:
split the sentence where there is a single space
map the words and for each word, split the letters and reduce:
for each letter check if the idx is even,
if yes, uppercase that letter and if not lowercase it.
return the joined letters
return the joined words with a space.
*/

const toWeirdCase = (sentence) => {
  return sentence.split(' ').map((word) => {
    return word.split('').reduce((acc, curr, idx) => {
      acc += idx % 2 === 0 ? curr.toUpperCase() : curr.toLowerCase();
      return acc;
    }, '');
  }).join(' ');
};

console.log(toWeirdCase('This'));
//, 'ThIs');
console.log(toWeirdCase('is'));
//, 'Is');
console.log(toWeirdCase('This is a test'));
//, 'ThIs Is A TeSt');
console.log(toWeirdCase( "String" ));//=> returns "StRiNg"
console.log(toWeirdCase( "Weird string case" ) === "WeIrD StRiNg CaSe");//=> returns "WeIrD StRiNg CaSe"