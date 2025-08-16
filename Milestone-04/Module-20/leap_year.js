
function leapYear(year) {

    if (year % 400 == 0 && year % 4 == 0) {
        return 'It is Leap Year';
    }
    else return 'Not Leap Year';
}

let result = leapYear(2000);
console.log(result);