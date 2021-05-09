/*
Complete the solution so that it returns the number of times
the search_text is found within the full_text.

split the fulltxt and loop through each letter, slicing from the curr idx
to the serachTxt length to get each possible combination
check if there the searchTxt matches the combinations
if yes, increment the count
*/


const solution = (fullTxt, searchTxt) => {
  return fullTxt.split('').reduce((acc, _, idx) => {
    return fullTxt.slice(idx, idx + searchTxt.length) === searchTxt ?
      acc + 1 : acc + 0;
  }, 0);
};

const solution_ = (txt, search) => {
  return txt.split(search).length - 1;
};

console.log(solution('aa_bb_cc_dd_bb_e', 'bb'));
// 2
console.log(solution('aaabbbcccc', 'bbb'));
// 1
console.log(solution('abcdeb','b'));
// 2
console.log(solution('abc','b'));
// 1
console.log(solution('ac','bb'));
// 1