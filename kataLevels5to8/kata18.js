/*
** Let's assume that a song consists of some number of words (that don't contain WUB). 
** To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" 
** before the first word of the song (the number may be zero), after the last word (the number may be zero), 
** and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, 
** including "WUB", in one string and plays the song at the club.
** For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

** Problem: return the original song from an input that has 'WUB' randomly inserted between the words

** Example: 
** songDecoder("AWUBBWUBC"), "A B C","WUB should be replaced by 1 space"
** songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C","multiples WUB should be replaced by only 1 space"
** songDecoder("WUBAWUBBWUBCWUB"), "A B C","heading or trailing spaces should be removed"

** Data:
** input: string
** output: string

** Algorithm:
** replace all 'WUB' substrings by 1 space
** regexWUB = /WUB/g
** multiple subsequent 'WUB' substrings are replaced by 1 space
** regexSpaces = /\s+/ 
** remove trailing spaces
** regexStartSpace = /^\s+/
** regexEndSpace = /\s+$/
** return that string
*/
// Option 1
function songDecoder1(song){
  return song.replace(/WUB/g, ' ')
  .replace(/\s{2,}/g, ' ')
  .replace(/^\s+/, '')
  .replace(/\s+$/, '');
}

//Option 2
function songDecoder(song) {
  return song.replace(/(WUB)+/g, " ").trim();
}

console.log(songDecoder("AWUBBWUBC"));
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
console.log( songDecoder("WUBAWUBBWUBCWUB"));
