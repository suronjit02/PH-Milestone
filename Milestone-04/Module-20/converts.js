
// inch to feet

function inchToFeet(inch) {

    let feet = parseInt(inch / 12);
    let extraInch = inch % 12;

    console.log(feet, 'ft', extraInch, 'inch')

}

inchToFeet(75);