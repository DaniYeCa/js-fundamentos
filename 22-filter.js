// const animals = ['🐼', '🐥', '🐄', '🦁']


// const herbAnimals = []


// for (let i = 0; i < animals.length; i++){
//   const animal = animals[i];

//   if (animal === '🐼' || animal === '🐄'){
//     herbAnimals.push(animal);
//   }
// };

const animals = [
  { icon: '🐼', herb: true },
  { icon: '🐥', herb: false },
  { icon: '🐄', herb: true },
  { icon: '🦁', herb: false },
];


// const herbAnimals = animals.filter((animal) => {

//   return animal.herb;
// });

// const herbAnimals = herbAnimals.map((animal) => {

//   return animal.icon;
// });

const herbAnimals = animals
  .filter((animal) => {
    return animal.herb;
  })
  .map((animal) => {
    return animal.icon;
  });


console.log(`Los animales herviboros son: ${herbAnimals}`);