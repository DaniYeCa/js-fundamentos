const animals = ['🐶', '🐈', '🐂', '🐥'];
const newAnimals = ['🦎', '🐠'];

// newAnimals.forEach((animal) => {
//   animals.push(animal);
// });


const updatedAnimals = animals.concat(newAnimals);
console.log(updatedAnimals);

const batchOfAnimals = [
  ['🦎', '🐠'],
  ['🦎', '🐂'],
  '🐖',
  ['🐼', '🐸'],
];

// const fullAnimalList = batchOfAnimals.forEach((batch) => {
//   batch.forEach(animal => {
//     animals.push(batch)
//   });
// });
const fullAnimalList = animals.concat(batchOfAnimals.flat());

console.log(fullAnimalList);