/*
input: string with any character type
output: string of open or closed brakets

algorith:
construct an obj where key is the char and value is the num of char occurence
ignoring case
split the input, for each char check if the value is greater than 1.
If yes, return ')' else return '('
return the joined map
*/

const duplicateEncode = (text) => {
  const count = text.toLowerCase().split('').reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;
    return acc;
  }, {});

  return text.split('').map((char) => {
    return count[char.toLowerCase()] > 1 ? ')' : '(';
  }).join('');
};

console.log(duplicateEncode("din"));
//,"(((");
console.log(duplicateEncode("recede"));
//,"()()()");
console.log(duplicateEncode("Success"));
//,")())())","should ignore case");
console.log(duplicateEncode("(( @"));
//,"))((");