/* 
Task 7
Given a 2D array, update the value at second row first item to 99 and print the updated array.

input:

[
  [1, 2],
  [3, 4],
  [5, 6]
]
Expected Array:

[
  [1, 2],
  [99, 4],
  [5, 6]
]
*/

let array = [
  [1, 2],
  [3, 4],
  [5, 6]
]

console.log(array);

array[1][0] = 99;

console.log(array);