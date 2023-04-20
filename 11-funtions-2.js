// funcion

function sum(num1, num2) {
    return num1 + num2;
}

var totalSum = sum(4, 6);
var totalSum2 = sum(1, 2);
var totalSum3 = sum(7, 2);
var totalSum4 = sum(8, 10);

console.log (`La sumas totales valen: ${totalSum}, ${totalSum2}, ${totalSum3}, ${totalSum4},`);


// funcion anonima
var substratct = function (a, b) {
    return a - b;
};

console.log(`La resta vale: ${substratct(4, 2)}`);


// funcion flecha (arrow fuction)

var multiply = (a, b) => a * b;

console.log(`La multiplicacion vale: ${multiply(4, 2)}`);