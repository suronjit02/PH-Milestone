/* 
Task-1
Take four parameters. Multiply the four numbers and then return the result
*/

function multiply(num1, num2, num3, num4) {

    let result = num1 * num2 * num3 * num4;

    return result;

}

let num1 = 1, num2 = 2, num3 = 3, num4 = 4;

let bal = multiply(num1, num2, num3, num4);

console.log('The multiplication is : ', bal);