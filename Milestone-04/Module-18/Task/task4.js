/* 
Task 4 (Hard)

Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
*/

const statement = 'I am a hard working person'

let revStatement = '';

for (let i = 0; i < statement.length; i++) {
    if (statement[i] === '') {
        revStatement.push(statement[i]);
    }
}
console.log(revStatement)