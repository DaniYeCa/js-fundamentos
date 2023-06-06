const numbers = [1, 10, 3, 4, 5, 6];


// Funciones sort para numeros
const orderNumbersAscending = (a, b) => a - b;
const orderNumberDescanding = (a, b) => b - a;


numbers.sort(orderNumbersAscending);
// numbers.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }

//   if (a < b) {
//     return -1;
//   }

//   return 0;
// });




console.log(numbers);


const names = ['juan', 'pepe', 'alberto'];

// Funciones sort para texto
const compareStringsAscending = (a, b) => a.localeCompare(b);
const compareStringsDescending = (a, b) => a.localeCompare(a);

names.sort((a, b) => {
  return a.localeCompare(b);
});

console.log(names);


const people = [
  { name: 'juan', age: 30 },
  { name: 'pepe', age: 40 },
  { name: 'Alberto', age: 50 },
  { name: 'pepe', age: 20 },
  { name: 'Ramon', age: 75 },
];


people.sort((a, b) => {

  return compareStringsAscending(a.name, b.name);
});


people.sort((a, b) => {
  return orderNumbersAscending(a.age, b.age);
});

console.log(people);