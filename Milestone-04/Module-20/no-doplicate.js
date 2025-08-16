
let names = ['os', 'kos', 'singara', 'bulbul', 'mostok', 'kos', 'bulbul', 'kos', 'rasmika', 'mandana'];

function noDoblicate(array) {

    let newArray = [];

    for (let name of names) {
        if (newArray.includes(name) === false) {
            newArray.push(name);
        }
    }
    console.log(newArray);
}

noDoblicate(names);