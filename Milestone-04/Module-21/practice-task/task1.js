
/* 
Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
*/

function lowestNum(ary) {

    let min = ary[0];
    for (let itm of ary) {
        if (min > itm) {
            min = itm;
        }
    }
    console.log(min);
}

const heights2 = [167, 190, 120, 165, 137];

lowestNum(heights2);