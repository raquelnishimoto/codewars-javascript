/*
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

input: string of words containing spaces
output: string of words in inverted order and inverted case

algorithm:
split all the characters, incl spaces
map the list of chars:
* inverting the case (up -> low, low -> up)
join the result
split where there is a space and reduce the result:
* inverting the order

return the joined reduced result with a space
*/

const stringTransformer = (sentence) => {
  return sentence
    .split('')
    .map((curr) => {
      return curr === curr.toUpperCase()
        ? curr.toLowerCase()
        : curr.toUpperCase();
    })
    .join('')
    .split(' ')
    .reduce((acc, curr) => {
      acc.unshift(curr);
      return acc;
    }, [])
    .join(' ');
};

console.log(stringTransformer("Example string"));
// 'STRING eXAMPLE'
console.log(stringTransformer("Example Input"));
// ==> "iNPUT eXAMPLE"
console.log(stringTransformer("You Know When  THAT  Hotline Bling"));
// ==> 'bLING hOTLINE  that  wHEN kNOW yOU'
