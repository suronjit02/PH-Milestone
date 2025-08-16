
const phones = [
    { name: 'Samsung', price: 450000, color: 'Black' },
    { name: 'Xomi', price: 350000, color: 'Black' },
    { name: 'Oppo', price: 200000, color: 'Black' },
    { name: 'Nokia', price: 550000, color: 'Black' },
    { name: 'Walton', price: 150000, color: 'Black' }
]

function cheapestPhone(phones) {
    let min = phones[0];
    for (let phone of phones) {
        if (min.price > phone.price) {
            min = phone;
        }
    }
    console.log(min.price);
}

cheapestPhone(phones);