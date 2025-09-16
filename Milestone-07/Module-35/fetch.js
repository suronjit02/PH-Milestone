
const person = {
    name: 'suronjit',
    age: 22,
    family: {
        father: 'rabindra',
        mother: 'anjali'
    }
}

const jsonData = JSON.stringify(person);

const objectData = JSON.parse(jsonData)
// console.log(objectData);