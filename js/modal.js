// /* Шпаргалка по методам масивів:
// split/join -- перетворює рядок на масив і назад.
// push () -- додає елементи до кінця,
// pop() -- видаляє елемент з кінця,
// shift() -- видаляє елемент із початку,
// unshift() - додає елементи на початок.
// splice(index, deleteIndex, ...arr) -- починаючи з індексу index, видаляє deleteIndex елементів і вставляє arr.
// slice(start, end) -- створює новий масив, копіюючи елементи з позиції start до end (не включаючи end).*/

// /* Шпаргалка з оголошення функцій у JS:
// Функціональний вираз (function expression)
// const greet = function (name) {
//  return `Hello, ${name}`;
// };

// Оголошення функції (function declaration)
// function greet(name) {
//  return `Hello, ${name}!`;
// } */

// /* Декілька лайфхаків при роботі з масивами.
// Як швидко очистити масив
// const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];
// fruits.length = 0;
// console.log(fruits); // поверне []

// Як об’єднати більше двох масивів
// const fruits = ['apple', 'banana', 'orange'];
// const meat = ['poultry', 'beef', 'fish'];
// const vegetables = ['potato', 'tomato', 'cucumber'];
// const food = [...fruits, ...meat, ...vegetables];
// console.log(food); // поверне ["apple", "banana", "orange", "poultry", "beef", "fish", "potato", "tomato", "cucumber"]

// Як отримати рандомне значення масиву
// const fruits = [ 'banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple', ];
// const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
// console.log(randomFruit); // поверне рандомний фрукт із масиву */

// /* Функция, которая принимает массив цен и возвращает их сумму */
// const calculateTotalPrice = function (items) {
//  let total = 0;

//  for (const item of items) {
//   total += item;
//  }
//  return total;
// };

// console.log(calculateTotalPrice([1, 2, 3])); //6
// console.log(calculateTotalPrice([5, 9, 10, 26])); //50
// console.log(calculateTotalPrice([19, 33, 48, 94, 57])); //251

// /* Функция для поиска логина в массиве */
// const logins = ['maybe', 'log', 'igor', 'taras'];

// const findLogin = function (allLogins, loginTiFind) {
//  return allLogins.includes(loginTiFind)
//   ? `Пользователь ${loginTiFind} найден`
//   : `Пользователь ${loginTiFind} не найден`;
// };

// console.log(findLogin(logins, 'lol')); // Пользователь lol не найден
// console.log(findLogin(logins, 'igor')); //Пользователь igor найден
// console.log(findLogin(logins, 'java')); //Пользователь java не найден
// console.log(findLogin(logins, 'maybe')); //Пользователь maybe найден

// /* Функция для поиска самого маленького числа в массиве */
// const findSmallesNumber = function (numbers) {
//  let smallestNumber = numbers[0];

//  for (const number of numbers) {
//   if (number < smallestNumber) {
//    smallestNumber = number;
//   }
//  }
//  return smallestNumber;
// };

// console.log(findSmallesNumber([1, 2, 3])); //1
// console.log(findSmallesNumber([5, 9, 10, 26])); //5
// console.log(findSmallesNumber([19, -33, 48, 94, 57])); //-33

// /* Функция инвертирует в регистр (из нижнего в верхний и из верхнего в нижни) */
// const changeCase = function (string) {
//  const letters = string.split('');
//  let inverstedString = '';

//  for (const letter of letters) {
//   const isInLowerCase = letter === letter.toLowerCase();
//   inverstedString += isInLowerCase
//    ? letter.toUpperCase()
//    : letter.toLowerCase();
//  }
//  return inverstedString;
// };

// console.log(changeCase('qWerTY'));
// console.log(changeCase('ManGo'));
// console.log(changeCase('ajAx'));

// /* Функция из строки возвращает slug (1.делаем все в маленьком регистре toLowerCase() 2. сшиваем split(' ')3.пробелы заменяем на тире join('-')) */
// const slugify = function (string) {
//  return string.toLowerCase().split(' ').join('-');
// };

// console.log(slugify('Top 10 benefits of React framework')); //top-10-benefits-of-react-framework

// /* Функция add для сложения произвольного колличества аргументов (чисел) */
// const add = function (...args) {
//  let total = 0;
//  for (const arg of args) {
//   total += arg;
//  }
//  return total;
// };
// console.log(add(1, 2, 3)); // 6
// console.log(add(1, 5, 6, 9, 8)); // 29
// console.log(add(1, 5, 6, 9, 8, 56, 87)); // 172

function getEvenNumbers(start, end) {
 // Change code below this line
 const numbers = [];

 for (let i = start; i <= end; i += 1) {
  if (i % 2 === 0) {
   numbers.push(i);
  }
 }
 return numbers;
 // Change code above this line
}

console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(7, 7));

const apartment = {
 imgUrl: 'https://via.placeholder.com/640x480',
 descr: 'Spacious apartment in the city center',
 rating: 4.7,
 price: 5000,
 tags: ['premium', 'promoted', 'top', 'trusted'],
 owner: {
  name: 'Henry Sibola',
  phone: '982-126-1588',
  email: 'henry.carter@aptmail.com',
 },
};

// Change code below this line
apartment.area = 60;
apartment.rooms = 3;
apartment.location = [];
apartment.owner.name = 'Jamaica';
apartment.location.city = 'Kingston';
