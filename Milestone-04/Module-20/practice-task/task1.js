/* 
Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
*/

function celToFar(cel) {

    // fahrenheit = (celsius * 1.8) + 32
    let far = (cel * 1.8) + 32;
    return far;
}

let fahrenheit = celToFar(33);

console.log(fahrenheit);