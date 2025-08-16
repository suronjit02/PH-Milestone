
function sumOfArray(array) {

    let sum = 0;
    for (let i = 0; i < array.length; i++) {

        sum += array[i];

    }
    console.log(sum);


}

let num = [2, 5, 3, 2, 4];

sumOfArray(num);