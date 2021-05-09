/*
For a given nonempty string s find a minimum substring t
and the maximum number k
such that the entire string s is equal to t repeated k times.

take the substring(0, idx+2) from the input,
split the string in all occurs of subtring,
filter the result where elements are not empty,
this means that there is an element that don't match the subStr
if length of filter is not zero keep going until you find 0
when 0 is found return an array with the substring and the length of the split
*/


const f = (word) => {
  for (let idx = 0; idx < word.length; idx++) {
    let subStr = word.slice(0, idx + 2);
    if (word.split(subStr).filter((element) => element).length === 0) {
      return [subStr, word.split(subStr).length - 1];
    }
  }
  return null;
};

console.log(f("ababab"));
//, ["ab", 3])
console.log(f("abcde"));
//, ["abcde", 1])

console.log(f("abaaba"));
// ["aba", 2])