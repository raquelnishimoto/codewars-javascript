/*
Complete the function scramble(str1, str2) that returns true if
a portion of str1 characters can be rearranged to match str2,
otherwise returns false.

input: two strings, 1st is the string of chars that have to
match 2nd string

convert str2 into k and v where v is the count of letter occurences
do the same with str1.

go through each key of str1 and chenck if there is a correspondence in
str2 where count is equal or greater then value in str1

if not return false, otherwise return true.

*/

const convert = (word) => {
  return word.split('').reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;
    return acc;
  }, {});
};

const scramble = (str1, str2) => {
  const obj1 = convert(str1);
  const obj2 = convert(str2);

  for (let letter in obj2) {
    if (obj2[letter] > (obj1[letter] || 0)) {
      return false;
    }
  }
  return true;
};


console.log(scramble('rkqodlw','world'));
//,true);
console.log(scramble('cedewaraaossoqqyt','codewars'));
//,true);
console.log(scramble('katas','steak'));
// //,false);
console.log(scramble('scriptjava','javascript'));
// //,true);
console.log(scramble('scriptingjava','javascript'));
// //,true);
console.log(scramble('scriptsjava','javascripts'));
// //,true);
console.log(scramble('jscripts','javascript'));
// //,false);
// console.log(scramble('aabbcamaomsccdd','commas'));
// //,true);