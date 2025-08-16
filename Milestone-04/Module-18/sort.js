
let friends = ['babul', 'kabul', 'cabul', 'obul', 'abul', 'mokbul'];

// console.log(friends);

friends.sort();
// console.log(friends);

let age = [23, 4, 100, 1, 16, 75];

// age.sort();
// console.log(age);

const sortedAges = age.sort(function (a, b) { return a - b });// a-b for asending sort

console.log(sortedAges);

let ultaSort = age.sort(function (a, b) { return b - a }); // b-a for descending sort

console.log(ultaSort);

