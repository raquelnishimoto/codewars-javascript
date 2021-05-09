/*
Maze Runner:

find the starting point where in the inner array element equals 2.
find the finish point where in the inner array element equals 3.
initialise player position where the starting point is. e.g maze[6][1]

go through each element in direction array, if element equals
* 'N' decrement the index that accesses element in outer array
* 'S' increment the index that accesses element in outer array
* 'E' increment the index that accesses element in inner array
* 'W' decrement the index that accesses element in inner array

there are three validations within each loop:
1. player reached finish square?
2. player hit a wall?
3. player is outside boundaries -
 - index < 0
 - index > maze.length
 - index > mazeRow.length

if going through all the elements in the array `direction` does not return
any of the validations - then player is lost
*/

const START = 2;
const FINISH = 3;
const WALL = 1;

let maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1]
];

// let maze = [
//   [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
//   [1, 3, 1, 0, 1, 0, 0, 0, 0, 1],
//   [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
//   [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
//   [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
//   [1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
//   [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
//   [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
//   [1, 1, 1, 0, 1, 1, 1, 1, 2, 1]
// ];

function getStartPositions(maze, position) {
  let row;
  let positions = [];

  for (let idx = 0; idx < maze.length; idx++) {
    if (maze[idx].includes(position)) {
      row = maze[idx];
      positions.push(idx);
      break;
    }
  }

  for (let sqr = 0; sqr < row.length; sqr++) {
    if (row[sqr] === position) {
      positions.push(sqr);
      break;
    }
  }
  return positions;
}

function isDead(maze, coodinates) {
  let [latitude, longitude] = coodinates;
  let outBoundary = maze.length;

  return (
    coodinates.includes(outBoundary) ||
    latitude < 0 ||
    longitude < 0 ||
    maze[latitude][longitude] === WALL
  );
}

function hasFinished(playerSquare) {
  return playerSquare === FINISH;
}

function movePlayer(direction, coodirnates) {
  let [latitude, longitude] = coodirnates;

  switch (direction) {
    case 'N':
      latitude -= 1;
      break;
    case 'S':
      latitude += 1;
      break;
    case 'W':
      longitude -= 1;
      break;
    case 'E':
      longitude += 1;
      break;
  }
  return [latitude, longitude];
}

function mazeRunner(maze, directions) {

  let [lat, long] = getStartPositions(maze, START);

  for (let step = 0; step < directions.length; step++) {
    [lat, long] = movePlayer(directions[step], [lat, long]);
    if (isDead(maze, [lat, long])) {
      return 'Dead';
    } else if (hasFinished(maze[lat][long])) {
      return 'Finish';
    }
  }
  return 'Lost';
}


// console.log(getStartPositions(maze, FINISH));

console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"]));
console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "E", "E", "N", "N", "E"]));
console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E", "W", "W"]));
console.log(mazeRunner(maze, ["N", "N", "N", "W", "W"]));
console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "S", "S", "S", "S"]));
console.log(mazeRunner(maze, ["N", "E", "E", "E", "E"]));

console.log(mazeRunner(maze, ['N', 'E', 'E']));
// console.log(mazeRunner(maze, ['W', 'W', 'E', 'N', 'S', 'S', 'S', 'N', 'N', 'E', 'N', 'E', 'N',
//   'N', 'E', 'N', 'S', 'E', 'N', 'W', 'S', 'W', 'E', 'W', 'N', 'E', 'E', 'E', 'E', 'W', 'S',
//   'W', 'N', 'E', 'W', 'N', 'N', 'W', 'S', 'W', 'E', 'N', 'S', 'S', 'W', 'N', 'S', 'E', 'E',
//   'W', 'W', 'N', 'W']));
