var trueVar = true;
console.log(trueVar);

trueVar = false;
console.log(trueVar);

console.log('igual doble solo number: ' + (5 == 5)); 
console.log('igual doble con string y number: ' + ('5' == 5));

console.log('igual triple solo number: ' + (5 === 5));
console.log('igual tiple con string y number: ' + ('5' === 5));

console.log('Es 2 moyer que 3? ' + (2 > 3));
console.log('Es 2 moyer que 3? ' + (2 < 3));

console.log('Es 3 mayor o igual que 3? ' + (3 >= 3));

var isSameName = 'juan'.toUpperCase() === 'juan' .toUpperCase()
console.log(`Son el mismo nombre? ` + isSameName)

// truthy
console.log('Es 2 truthy' + Boolean(2));
console.log('Es PMBA truthy? ' + Boolean('PMBA'));
console.log('Es true truthy? ' + Boolean(true));

// Falsy

console.log('Es 0 falsy? ' + Boolean(0));
console.log('Es un string vacio truthy? ' + Boolean(''));
console.log('Es false truthy? ' + Boolean(false));

var surname;
console.log('Es surname falsy? ', Boolean(surname));

