const numbers = [1, 2, 3, 4, 5];

// let sum = 0;

// numbers.forEach(element => {
//   sum += number;
// });


const sum = numbers.reduce((acc, next) => {
  console.log(acc, next);
  return acc + next;
}, 0);

console.log(sum);

const words = ['Hola', 'que', 'tal', '?'];

// words.join(' ')

const sentence = words.reduce((acc, next) => {
  console.log(acc, next)

  return `${acc} ${next}`;
});

console.log(sentence);


const animals = [
  { icon: '🐼', herb: true },
  { icon: '🐥', herb: false },
  { icon: '🐄', herb: true },
  { icon: '🦁', herb: false },
];

// const herbAnimals = animals.filter(animal => animal.herb)


const herbAnimals = animals.reduce((acc, next) => {
  if (next.herb) {
    acc.push(next);
  }
  return acc;
}, []);

console.log(herbAnimals)


