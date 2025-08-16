
function sumOfEven(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 == 0) {

            sum += input[i];
        }
    }
    return sum;
}

let num = [2, 3, 4, 5, 6, 7, 8];

let sum = sumOfEven(num);

console.log('Sum of even number from "num" array :', sum);