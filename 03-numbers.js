var two = 2;
var twoWithDecimal = 2.5;
var negative = -2;


// suma
var suma = 3 + 2
console.log(`La suma vale: ${suma}`);


// REsta
var substract = 10 - 4
console.log(`La resta vale: ${substract}`);

// Multiplicación
var multiply = 6 * 4
console.log(`La multiplicacion vale: ${multiply}`);

// division
var divide = 40 / 4
console.log(`La division vale: ${divide}`);

// division con decimales
var divideWithDecimals = 25 / 4
console.log(`La division con decimales vale: ${divideWithDecimals}`);

// Resto

var rest = 25 % 4
console.log(`el resto vale: ${rest}`);

//potencia
var power = 5**2
console.log(`la potencia vale: ${power}`);

var complexCalculus = 2 + (2 * (4 + 5)) / 5 + 6
console.log(complexCalculus);

var numberAsString = '30';
var number = 35;

console.log(numberAsString + number);
console.log(number + numberAsString);
console.log(number + +numberAsString);

const numberAsNumber = Number(numberAsString);
// parseInt
// parseFloat
console.log(number + numberAsNumber);


// NaN (Not a Number)

var notValidNumber = Number('_')
console.log(`El numbero no valido es: ${notValidNumber}`);
var salary = 1000 * notValidNumber;


console.log(`Es el numero NaN? ${Number.isNaN(notValidNumber)}`);
console.log(`El salario es: ${salary}`);