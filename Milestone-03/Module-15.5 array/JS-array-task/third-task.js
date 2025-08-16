
/* 

3. Checking Array Membership with ‘includes’

Instructions:
-------------
1.Create an array of books containing different book.

2.Use the includes method to check if the array contains a javascript book.

3.Print a message to the console indicating whether the element is present in the array or not.

*/

let book = ['Himu', 'Onkar', 'monokotha', 'bonolota sen', 'javascript'];

let found = false;

for (let i = 0; i < book.length; i++) {

    if (book[i].includes('javascript')) {
        console.log('The javascript book is here and the index number is:', i);
        found = true;
        break;

    }

}

if (!found) {
    console.log('The javascript book is absent here.');
}