/*
The Supermarket Queue

input
customers: an array of positive integers representing the queue.
Each integer represents a customer,
and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.

output
The function should return an integer, the total time required.

algorithm:
find idx of quickest and increment
return new array with incremented num

*/

const queueTime = (customers, tills) => {
  let queue = customers.slice(0, tills);

  const totalTimeByQueue = customers.slice(tills).reduce((acc, curr) => {
    const quickestQueue = Math.min(...queue);
    queue[queue.indexOf(quickestQueue)] = quickestQueue + curr;

    acc = queue;

    return acc;
  }, queue);

  if (totalTimeByQueue.length === 0) return 0;

  return Math.max(...totalTimeByQueue);
};


console.log(queueTime([], 1));
//, 0));
console.log(queueTime([1,2,3,4], 1));
//, 10)));
console.log(queueTime([2,2,3,3,4,4], 2));
//, 9)));
console.log(queueTime([1,2,3,4,5], 100));
//, 5)));