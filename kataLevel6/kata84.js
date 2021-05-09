/*
Complete the method that takes an object of users,
and find the nexus: the user whose rank is the closest is equal to his honor.
Return the rank of this user. For each user,
the key is the rank and the value is the honor.

input: object where key is the rank and value is the honor
output: the key, representing the min dif between key and value

algorithm:
get all keys from the object, for each key return the calc: key - value
find the index of the min value of this list, based on this idx find the
value of the key of the rank and return that
*/

const nexus = (users) => {
  const rankHonourDiff = Object.keys(users).map(rank => {
    return Math.abs(Number(rank) - users[rank]);
  });
  const nexusIdx = rankHonourDiff.indexOf(Math.min(...rankHonourDiff));

  return Number(Object.keys(users)[nexusIdx]);
};

console.log(nexus({ 1:93, 10:55, 15:30, 20:19, 23:11, 30: 2 }));
// 20

console.log(nexus({"1":3,"3":3,"5":3}));
// 3