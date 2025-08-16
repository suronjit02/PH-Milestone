
// calculate average of odd number from an array

function oddAvrg(array) {
    let sum = 0;
    let count = 0;
    for (let number of array) {
        if (number % 2 == 1) {
            sum += number;
            count++;
        }
    }
    let avrg = sum / count;
    console.log(avrg);

}
const num = [4, 3, 5, 7, 4, 7];
oddAvrg(num);