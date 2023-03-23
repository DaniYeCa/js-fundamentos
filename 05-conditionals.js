// var age = 24
// var  canPartcipate = false

// if (age < 30) {
//     canPartcipate = true
// }

// console.log(`Puede participar el usuario? ${canPartcipate}`)

// var yearsToRenew = 0;
// var driverAge = 76;

// //18 o más, y 50 o menos de => 10
// //más de 50 y menos o igual a 75 => 5
// //mas de 75 años => 1

// if(driverAge >= 18 && driverAge <= 50) {
//     yearsToRenew = 10;
// }

// if(driverAge > 50 && driverAge <= 75) {
//     yearsToRenew = 5;
// }

// if(driverAge > 75) {
//     yearsToRenew = 1;
// }

// console.log(`Se tiene que renovar el carnet cada ${yearsToRenew} años`)

// var myName = 'Daniel'

// if (myName === 'Cristian') {
//     console.log('Eres el profe!');
// } else {
//     console.log('Eres un alumno!');
// }

// var time = 5000;
// var record = '';


// if (time < 8000) {
//     record = 'Word Record';
// } else if (time < 10000) {
//     record = 'Olimpic Record';
// } else if (time < 12000) {
//     record = 'Personal Best';
// } else {
//     record = 'No record';
// }


// console.log(`El record es: ${record}`);

var city = 'Barcelona';
var hasCar = false;
// OR OPERATOR
if ((city === 'Madrid' || city === 'Barcelona') && hasCar === false) {
    console.log('Va en metro!');
}
// AND OPERATOR
if (city === 'Madrid' && hasCar === true) {
    console.log('Puede ir en coche o en metro!');
}
