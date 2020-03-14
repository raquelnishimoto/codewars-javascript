/*
** Problem:
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
** Rules:
-Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
-A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
-Every smiling face must have a smiling mouth that should be marked with either ) or D.
No additional characters are allowed except for those mentioned.
Valid smiley face examples:
:) :D ;-D :~)
Invalid smiley faces:
;( :> :} :]
Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). 
Order of the face (eyes, nose, mouth) elements will always be the same

** Examples:
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

** Data 
input: array
output: interger

Algorithm:
In case of an empty array return 0.
initialise a count to 0
loop through each string
check if a valid pair of eyes is followed by 
- a valid nose OR
- a valid mouth

if there is a valid nose,
check if there is a valid month

if all these test pass increment the count
return this count
*/

// Option 1
function countSmileys(arr) {
  let count = 0;
  if (arr.length <= 0)
    return count;

  arr.forEach(smiley => {
    if (smiley.length === 3) {
      // validate if pair of eyes is followed by a valid nose
      if ((/(:|;)(?=-|~)/).test(smiley)) {
        // check if there is a valid mouth as well
        if ((/\)|D$/).test(smiley)) {
          count += 1;
        }
      }
      //check if there is a valid pair of eyes followed by a valid mouth
    } else if ((/(:|;)(?=\)|D)/).test(smiley)) {
      count += 1;
    }
  });
  return count;
}

// Option 2
function countSmileys(arr) {
  return arr.filter( smiley => (/^[:;][-~]?[\)D]$/).test(smiley)).length;
}

console.log(countSmileys([';o)' , ':-)' , ':(' , ':o)' , ';~)' , ';o)' , ';~>']));
console.log(countSmileys([':)', ';(', ';}', ':-D']));
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));
console.log(countSmileys([]));
console.log(countSmileys(([':---)', '))', ';~~D', ';D'])));