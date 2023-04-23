const marks = [10, 4, 6, 9, 4, 6, 1];

console.log(`El array marks tiene longitud: ${marks.length}`);

const length = marks.length; // 7


// Acceder al ultimo elementode un array
const lastMark = marks[marks.length - 1]
console.log(`La ultima es: ${lastMark}`);


// Podemos mutar elemntos de una posicion de una array
marks[0] = 4;
console.log(`La nota del primero alumno es ${marks[0]}`);


// Añadir al principio del array

marks.unshift(3); //[10, 4, 6, 9, 4, 6, 1];
console.log('unshift:', marks);

// Eliminar el primer elemento de un array

marks.shift(3); //[10, 4, 6, 9, 4, 6, 1];
console.log('shift:',marks);

// Añadir un elemneto al final de un array
marks.push(8);
console.log('push:', marks);

// Eleminiar el ultimo elemneto al final de un array
marks.pop();
console.log('pop:', marks);

const fruits = ['kiwi', 'manzana', 'melon'];
const firstFruit = fruits.slice(0, 1);
console.log(`El array con la primera fruta es:`, firstFruit);


//copy un array entero
const copyFruits = fruits.slice();
console.log('copy fruits array:' , copyFruits);


// Hacer un referencia a un arrray
const reassingedFruits = fruits;
reassingedFruits.push('Sandia');

console.log('reassingned fruits:', reassingedFruits);
console.log('Fruits:', fruits);