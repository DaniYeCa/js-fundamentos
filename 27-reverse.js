const people = [
  { name: 'A', age: 11 },
  { name: 'B', age: 22 },
  { name: 'C', age: 33 },
  { name: 'D', age: 44 },
];
const newPeople = people.slice().reverse();

console.log('new people:', newPeople);
console.log('people:', people);