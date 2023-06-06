const animals = ['🐼', '🦦', '🐸']

// const food = [];
// animals.forEach(getAnimalFood);


const getAnimalFood = (animal) => {
  let food;
  if (animal === '🐼') {
    food = '🎍';
  } else if (animal === '🦦') {
    food = '🐠';
  } else if (animal === '🐸') {
    food = '🐛';
  }

  return food;
};


const animalFood = animals.map((animal) => {
  const food = getAnimalFood(animal);
  return food;
});

console.log(animalFood);



// for (let i = 0; i < animals.length; i++) {
//   const animal = animals[i]

//   let animalFood;

//   if (animal === '🐼') {
//     animalFood = '🎍';
//   } else if (animal === '🦦') {
//     animalFood = '🐠';
//   } else if (animal === '🐸') {
//     animalFood = '🐛';
//   }

//   food.push(animalFood);
// }

console.log(`para los animales ${animals}`);
console.log(`Su comida favortia es ${animalFood}`);