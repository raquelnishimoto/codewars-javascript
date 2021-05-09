/*
Assume "#" is like a backspace in string.
This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

input: string of chars
output: string without symbol '#'

algorithm:
split the input there there is one or more '#'
for each substring check if the substring is made of '#'
if yes, take the previous substring, slicing it from idx 0 to substring.length - # count
if not, append the curr substring to previous result
return the joined result
*/

const cleanString = (text) => {
  return text.split(/(#+)/).reduce((acc, curr) => {
    const sizeAfterBackspace = acc.length - curr.length > 0 ?
      acc.length - curr.length : 0;

    acc = curr.indexOf('#') !== -1 ? acc.slice(0, sizeAfterBackspace) : acc + curr;
    return acc;
  }, '');
};

console.log(cleanString("abc#d##c"));
// ==>  "ac"
// console.log(cleanString("abc##d######"));
// // ==>  ""
// console.log(cleanString("#####www##t"));
// // ==>  ""
console.log(cleanString("abc####d##c#"));
// ==>  ""
