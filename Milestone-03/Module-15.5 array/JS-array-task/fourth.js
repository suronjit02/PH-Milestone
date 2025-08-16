
/* 4. Checking if it's an Array

Instructions:
-------------
1.Create different variables, each containing either an array or a non-array value.

2.Now use isArray to check if each variable is an array.

3.Print a message to the console indicating whether each variable is an array or not.

*/

let num = [];

let fruits = ['kola'];

let id = ('id is the baidi');

let roll = 12;



// is array or not cheek
if (Array.isArray(num) == true) {
    console.log('num is an array');
} else {
    console.log("num is not array");
}


if (Array.isArray(fruits) == true) {
    console.log('fruits is an array');
} else {
    console.log("fruits is not array");
}


if (Array.isArray(roll) == true) {
    console.log('roll is an array');
} else {
    console.log("roll is not array");
}


if (Array.isArray(id) == true) {
    console.log('id is an array');
} else {
    console.log("id is not array");
}
