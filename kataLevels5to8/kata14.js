/*
** Problem:
** Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
** Examples:
** solution('abc', 'bc') // returns true
** solution('abc', 'd') // returns false
** Data: strings
** Algorithm: 
** slice the last part of the string which has the same length as the second argument
** total length of 1 argument string - total length of 2 argument string
** compare that to second argument, return the boolean result
*/

function solution(str, ending) {
  return str.slice(str.length - ending.length) === ending;
}

console.log(solution('abcde', 'cde'));
console.log(solution('abcde', 'abc'));