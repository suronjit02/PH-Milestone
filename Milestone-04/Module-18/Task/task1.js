/* 

Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']

*/

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

const colors_reverse = [];

for (let i = colors.length - 1; i >= 0; i--) {

    colors_reverse.push(colors[i]);
}

console.log(colors_reverse);