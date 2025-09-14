
// array destructuring
const friends = ['ibba', 'dibba', 'kibba', 'nibba'];

// friend1 = friends[0];
// friend2 = friends[1];
// friend3 = friends[2];
// friend4 = friends[3];

const [friend1, friend2, friend3] = friends;

// console.log(friend2, friend3);



// object destructuring
const person = {
    name: 'baba sultan',
    age: 400,
    isdied: 'more gece but gece na',
    bari: 'modonpur'
}

const { name, age, bari, isdied } = person;

console.log(bari, name);