
/*

1.Declare an array of 3 tourist destinations
2.Add a new tourist destination to your tourist array
3.Add two more to your array
4.Remove the last tourist destination you have added
5.display the final array as output

 */

let tour = ['bandorban', 'tendorban', 'ashulia'];

tour.push('nailtabari'); //add "nailtabairi "  in last

tour.push('coxso-bazar', 'boxso-bazar'); // add 'coxso-bazar' & 'boxso-bazar' in last

tour.pop(); // remove the last element "boxso-bazar"

console.log(tour); // output is  'bandorban', 'tendorban', 'ashulia', 'coxso-bazar'
