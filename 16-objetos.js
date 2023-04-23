const person = {
    name: 'Cristian',
    surname: 'Catillo',
};

// const personName = person['name'];
// const personName = person.name;
console.log(`El nombre es: ${person.name} ${person.surname}`);

person ['age'] = 30;
console.log(`La persona tiene ${person.age} años`);

person ['city'] = 'Madrid';
delete person['city'];
console.log(`La persona vive en ${person.city}`);

person ['city'] = 'Madrid';
console.log(`La persona vive en ${person.city}`);

person.city = 'Cadiz';
console.log(`La persona vive en ${person.city}`);

// Ejemplo de claves dinamicas
function getKey(object, key) {
    return object[key];
}

const dynamicName = getKey(person, 'name');
const dynamicSurname = getKey(person, 'surname');
console.log(`La clave dinamecia name vale: ${dynamicName} ${dynamicSurname}`);