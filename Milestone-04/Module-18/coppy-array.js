
let price = [34, 56, 47, 87];

// let comp_price = price;
// comp_price[0] = 67;

let comp_price = [];

// for (let comp of price) {

//     comp_price.push(comp);
// }

// let newarray = Array.from(price);

// let newarray = [].concat(price);
let newarray = [...price];

newarray.push(99);

console.log(price);

console.log(newarray);


// shallow copy vs deep copy