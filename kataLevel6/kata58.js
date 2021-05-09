/*
Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace the
missing second character of the final pair with an underscore ('_').

split the string in every two chars
go to the last substring and check if length is 2
if not add an underscore to end of substring
*/

const solution = (string) => {
  const listOfSubStr = string.match(/.{1,2}/g) || [];
  const lastElement = listOfSubStr[listOfSubStr.length - 1] || [];
  if ((lastElement.length || 0) === 1) {
    listOfSubStr[listOfSubStr.length - 1] = lastElement.replace(/(.)/, '$1_');
  }
  return listOfSubStr;
};

// OPTION 2
const solution_ = (string) => {
  return (string.length % 2 === 0 ? string : string + '_')
    .match(/.{1,2}/g) || [];
};

console.log(solution("abcdef"));
//, ["ab", "cd", "ef"]);
console.log(solution("abcdefg"));
//, ["ab", "cd", "ef", "g_"]);
console.log(solution(""));
//, []);