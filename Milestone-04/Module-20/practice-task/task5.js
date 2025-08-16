/* 
Task-5:
Generate a random number between 10 to 20.
*/

function randomNum() {
    let random = Math.random() * 20;
    if (random > 9) {
        console.log(random);
    }
    else {
        for (let i = 0; ; i++) {
            let random = Math.random() * 20;
            if (random > 9) {
                console.log(random);
                break;
            }
        }
    }
}
random();
 
