
const fname = "Suronjit";
const lName = "Sutradhar";


const fullname = `my name is ${fname}  ${lName}`;

console.log(fullname);

// arrow function

const add = (a, b) => a + b;

console.log(add(34, 534));

// ---------------

const dekaiaDeKiAce = (...array) => {

    return console.log(array);

}

const roll = [12, 3, 2, 1, 6, 4, 7];

dekaiaDeKiAce(roll);

// sprite operator
const num = [2, 4, 32, 5, 13, 53, 53, 1, 14];

// eikane ... deate console e number gula dekacce sudu but ... na dile pura ekta array dekaito
console.log(...num);

// nice ... mane sprite operator use na korle console e protome num array ta dekaito pore number gula dekaito but ... use korate num array er vitorteke number gula ane porer number gular sate comma die die bose gece.
console.log(...num, 34,54,65,23,25)