
const numbers = [1, 4, 6, 3, 2, 1, 0, 9];

let count = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 3) {
//     count += 1;
//   }
// };

numbers.forEach((number, index) => {
  if (number > 3) {
    count += 1;
  }
});
console.log(`La cuenta vale: ${count}`)


let evenNumbers = [];
let oddNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i])
//   }
// };



const setNumberOddOrEven = (number, index, arr) => {
  number % 2 === 0 ? evenNumbers.push(number) : oddNumbers.push(number)

}


console.log(`Ever:`, evenNumbers);
console.log(`Odd:`, oddNumbers);