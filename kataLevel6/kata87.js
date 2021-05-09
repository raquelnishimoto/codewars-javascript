/*
Input: an array containing hashes of names
Output: a string formatted as a list of names separated by
commas except for the last two names, which should be separated by an ampersand.

algorithm:
map the array taking only the values of the 'name'
join the last two elements with an ampersand
join the remaining ones with a comma

*/

const list = (listOfNames) => {
  const names = listOfNames.map((value) => value['name']);
  const lastTwoNames = names.slice(names.length - 2, names.length).join(' & ');

  const firstNames = names.slice(0, names.length - 2).length > 0 ?
    names.slice(0, names.length - 2).join(', ') + ', ' :
    '';

  return firstNames + lastTwoNames;
};

console.log(list([ {name: 'May'}, {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));
// returns 'Bart, Lisa & Maggie'

console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]));
// returns 'Bart & Lisa'

console.log(list([ {name: 'Bart'} ]));
// returns 'Bart'

console.log(list([]));
// returns ''