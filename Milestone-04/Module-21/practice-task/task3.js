/* 
Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/

function calculateElectronicsBudget(qntyLaptop, qntyTablet, qntyMobile) {

    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const totalLaptopPrice = laptopPrice * qntyLaptop;
    const totalTabletPrice = tabletPrice * qntyTablet;
    const totalMobilePrice = mobilePrice * qntyMobile;

    const totalPrice = totalLaptopPrice + totalTabletPrice + totalMobilePrice;

    return totalPrice;
}

const laptop = 2;
const tablet = 3;
const mobile = 2;

let price = calculateElectronicsBudget(laptop, tablet, mobile);
console.log(price);