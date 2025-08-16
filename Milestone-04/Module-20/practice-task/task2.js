/* 
Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
*/

function repeatCount(ary) {

    let newArr = [];
    let count = 0;

    for (let item of ary) {

        if (newArr.includes(item) === false) {
            newArr.push(item);
            count++;
        }
    }

    let result = (ary.length - count) + 1;
    console.log(result);
}
let numbers = [5, 6, 11, 12, 5, 11, 98, 5];
repeatCount(numbers);