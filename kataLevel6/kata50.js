/*
lowercase the title, split the string where there is a space and
map through the words. For each word check:
* if it is included in
the list of minor words. If yes, return the word if no, return
capitalised word.
Join the splitted list with an space and capitalise the first letter in title
*/

const titleCase = (title, minorWords) => {
  if (title === '') return '';

  return title.toLowerCase().split(' ').map((word) => {
    const listOfMinorWords = (minorWords || '').toLowerCase().split(' ');
    const wordCapitalised = `${(word[0]).toUpperCase()}${(word).slice(1, word.length)}`;

    return listOfMinorWords.includes(word) ? word : wordCapitalised;
  }).join(' ').replace(/^\w/, title[0].toUpperCase());
};

// console.log(titleCase(''));
//, '')
// console.log(titleCase('a clash of KINGS', 'a an the of'));
//, 'A Clash of Kings')
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
//, 'The Wind in the Willows')
// console.log(titleCase('the quick brown fox'));
//, 'The Quick Brown Fox')