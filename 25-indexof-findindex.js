const animals = ['🐶', '🐈', '🐂', '🐥'];

const indexOfBull = animals.indexOf('🐂');
console.log(`el toro esta en el indice ${indexOfBull}`);


const people = [
  { name: 'A', age: 20 },
  { name: 'C', age: 40 },
  { name: 'C', age: 40 },
  { name: 'B', age: 30 },
  { name: 'C', age: 43 },
  { name: 'C', age: 45 },
  { name: 'D', age: 50 },
  { name: 'C', age: 50 },
];

const index = people.findIndex((person) => {
  if (person.name === 'C' && person.age >= 45 && person.age <= 50) {
    return true;
  }
});

console.log('La persona esta en la posicion:', index);
console.log(`La persona es:`, people[index])