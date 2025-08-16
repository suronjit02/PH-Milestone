
let employee = [
    { name: 'Abul', Designation: 'Web-Developer', Salary: 25000 },
    { name: 'Bbul', Designation: 'Software-Developer', Salary: 35000 },
    { name: 'Mokbul', Designation: 'Tv-Developer', Salary: 15000 },
    { name: 'Bulbul', Designation: 'Building-Developer', Salary: 20000 },

];

// console.log(employee);

// console.log(employee[3]);

// console.log(employee[2].Designation);

employee[0].name = 'mokbul er bap'; // change the name of first employee in object
for (let emp of employee) {

    console.log(emp.name, ':', emp.Designation);

}




