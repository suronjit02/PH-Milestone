
let shoping = [

    { name: 'pant', price: 500, quantity: 2 },
    { name: 'shirt', price: 600, quantity: 3 },
    { name: 'shoe', price: 900, quantity: 1 },
    { name: 'cap', price: 100, quantity: 1 }
]

function totalShoping(shoping) {

    let total = 0;
    for (let itm of shoping) {
        total = total + (itm.price * itm.quantity);
    }
    console.log(total);

}

totalShoping(shoping);