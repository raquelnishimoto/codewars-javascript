/*
** Given a string, print all possible palindromic partitions
** problem:
** examples: 
nitin
n i t i n
n iti n
nitin

geeks
g e e k s
g ee k s

data/structure:
array that stores all the palindromic partitions

algorithm: 
loop through the sring starting from 0 incrementing a letter in each loop
take the substring and compare it with the reverse equivatent
if the are equal push the substring to the array
code:
*/

function palindromicPartions(string) {
  let palindromies = [];

  if (string.length <= 1) {
    return string;
  }
  
  if (string === string.split('').reverse().join('')) {
    palindromies.push(string);
  }
  return palindromies;
}

console.log(palindromicPartions('nitin'));
console.log(palindromicPartions('geeks'));