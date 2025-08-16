
let height = [23, 43, 99, 56, 76, 32, 45, 86, 33, 100, 21, 36];

function getMax(ary) {

    let max = ary[0];
    for (let itm of ary) {

        if (max < itm) {
            max = itm;
        }
    }
    console.log(max);
}

// getMax(height);

function getMin(ary) {

    let min = ary[0];
    for (let itm of ary) {
        if (min > itm) {
            min = itm;
        }
    }
    console.log(min);
}

getMin(height);