// const fridgeFood = ['🍜', '🍔', '🍆', '🍗'];
const fridgeFood = [
  { food: '🍜', id: 1 },
  { food: '🍔', id: 2 },
  { food: '🍆', id: 3 },
  { food: '🍗', id: 4 }
];

const foodToEat = fridgeFood.find((food, index) => {
  if (food.food === '🧀') {
    return true;
  }
});


console.log(fridgeFood);
console.log(`en mi nevera tengo pollo ${foodToEat}`)




const people = [
  { name: 'A', age: 11 },
  { name: 'B', age: 22 },
  { name: 'C', age: 33 },
  { name: 'D', age: 44 },
];

const hasPersonOver30 = people.some((person) => person.age > 30);
console.log(hasPersonOver30)


// const hasPersonOver30 = (peopleArr) => {
//   const personOver30 = peopleArr.find((person) => {
//     if (person.age > 30) {
//       return true;
//     }
//   });
//   return !!personOver30;
// };

// console.log(hasPersonOver30(people));







