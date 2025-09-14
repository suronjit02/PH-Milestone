
const products = [

    { name: 'samsung', price: 45000, color: 'black' },
    { name: 'samsung2', price: 45000, color: 'black' },
    { name: 'redmi', price: 35000, color: 'white' },
    { name: 'apple', price: 145000, color: 'neviblue' },
    { name: 'walton', price: 5000, color: 'gray' }

]

const result = products.map(product => product.price);

// console.log(result);

// products.forEach(produc => console.log(produc.color))

const result2 = products.filter(produc => produc.price > 5000);

// console.log(result2)

const result3 = products.find(product => product.price === 45000);

console.log(result3)