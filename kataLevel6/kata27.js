/*
** Problem:
Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.
** Examples:
dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
** Data:
input: integer
output: string
structure: array/string - loop though it
** Algorithm:
convert the number to a string
loop through it
for each digit evaluate:
- is odd? if yes replace the char with '-char-'
remove the dash start and end of the string 
return this string
*/

function dashatize(num) {
  if (Number.isNaN(num)) return num.toString();
  let hyphenized = num.toString().split('').map(n => {
    return parseInt(n) % 2 === 0 ? n : `-${n}-`;
  });
  return hyphenized.join('')
  .replace(/-+/g, '-')
  .replace(/^-/, '')
  .replace(/-$/, '');
}

console.log(dashatize(274));
console.log(dashatize(5311));
console.log(dashatize(86320));
console.log(dashatize(974302));
console.log(dashatize(NaN));
console.log(dashatize(0));
console.log(dashatize(-1));
console.log(dashatize(-28369));