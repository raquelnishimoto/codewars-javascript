/*
input: numbers
output: string in the format 'num + num'

algorith:
convert number to string, split the string and for each number return
the number + 0 * index of element (starting from last)
filter anything that is not ''
return the map joined by ' + '
*/

const expandedForm = (number) => {
  return String(number).split('').map((num, idx) => {
    return num === '0' ? '' : `${num}${'0'.repeat(String(number).length - (idx + 1))}`;
  }).filter((element) => element !== '').join(' + ');
};


console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'