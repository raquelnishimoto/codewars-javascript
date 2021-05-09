/*
Input
The input consists of a single non-empty string, consisting only
of uppercase English letters, the string's length doesn't exceed 200 characters

Output
Return the words of the initial song that Polycarpus used to make a
dubsteb remix. Separate the words with a space.

replace 'WUB' or more occurences for an empty space
remove empty spaces from begining and end of word
*/

const songDecoder = (song) => {
  return song.replace(/(WUB)+/g, ' ').replace(/^[' ']/, '').replace(/[' ']$/, '');
};

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));
  // =>  WE ARE THE CHAMPIONS MY FRIEND

console.log(songDecoder("AWUBBWUBC"));
//, "A B C","WUB should be replaced by 1 space");
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
//, "A B C","multiples WUB should be replaced by only 1 space");
console.log(songDecoder("WUBAWUBBWUBCWUB"));
//, "A B C","heading or trailing spaces should be removed");