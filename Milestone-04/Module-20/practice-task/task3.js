/* 
Task-3:
Write a function to count the number of vowels in a string.
*/

function vowelCount(str) {

    let count = 0;
    for (let item of str) {
        if ((item === 'a') || (item === 'e') || (item === 'i') || (item === 'o') || (item === 'u') || (item === 'A') || (item === 'E') || (item === 'I') || (item === 'O') || (item === 'U')) {

            count++;

        }
    }
    console.log(count);

}

let myName = 'Suronjit';
vowelCount(myName);