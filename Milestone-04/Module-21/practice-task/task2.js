/* 
Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(ary) {

    let small = ary[0];
    for (let name of ary) {
        if (small.length > name.length) {
            small = name;
        }
    }
    console.log(small);
}
smallestName(heights2);