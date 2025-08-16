/* 
Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
*/

function findlowestWord(str) {

    let sml = str.slice();
    for (let word of str) {
        if (word < str.slice()) {
            sml = word;
        }
    }
    console.log(sml);
}
let string = 'I am learning Programming to become a programmer';
findlowestWord(string);