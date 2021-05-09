/*
A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.

output: integer representing the number of bounces

algorithm:
check if bounce is less than 1 and greater than 0, if not return -1
check if window is less than h otherwise return -1

start the bounce count at 1
each time the ball bounces
check if the result is greater or equal to window,
if yes increment count by 2
take h and multiple by bounce
and keep on bouncing
if not return bounceCount
*/

const bouncingBall = (height, bounce, window) => {
  if (bounce <= 0 || bounce >= 1 || window >= height) return -1;

  let bounceCount = 1;
  for (let bounceHeight = height * bounce; bounceHeight > window;) {
    bounceHeight *= bounce;
    bounceCount += 2;
  }

  return bounceCount;
};

console.log(bouncingBall(3.0, 0.66, 1.5));
//, 3)
console.log(bouncingBall(30.0, 0.66, 1.5));
//, 15)
console.log(bouncingBall(3, 1, 1.5));
// -1
console.log(bouncingBall(10, 0.6, 10));
// 1