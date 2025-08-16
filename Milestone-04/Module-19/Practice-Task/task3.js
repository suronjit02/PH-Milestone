/* 
Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

function make_avg(array, sizeOfArray) {
    let sum = 0;
    for (let i = 0; i < sizeOfArray; i++) {
        sum += array[i];
    }

    console.log(sum / sizeOfArray);
}

let array = [20, 31];

make_avg(array, 2);