/*
You will be given an array of ints of length > 2 and your task is to convert it
into an arithmetic progression by the following rule:

For each element there are exactly three options:
an element can be decreased by 1,
an element can be increased by 1
or it can be left unchanged.


For the given array,
take the length
take the min number and its idx
take the max number and its idx

if the length is greater than the max number then return -1

if max num idx is greater than idx of min num, we can increase count
if max num idx is less than idx of min num, we can decrease count

the max num in the progression will be the either:
 - the length of the array
 - same as majority of numbers




*/