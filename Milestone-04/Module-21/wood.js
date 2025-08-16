
/* 

chair -----> 10 cft
table -----> 20 cft
bed -------> 50 cft

*/

function woodQuantity(quantityChair, quantityTable, quantityBed) {

    const perChair = 10;
    const perTable = 20;
    const perBed = 50;

    const toatalChairWood = quantityChair * perChair;
    const toatalTableWood = quantityTable * perTable;
    const toatalBedWood = quantityBed * perBed;

    const totalWood = toatalChairWood + toatalTableWood + toatalBedWood;

    console.log(totalWood);

}

woodQuantity(2, 1, 4);

