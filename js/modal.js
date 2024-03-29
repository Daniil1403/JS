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

// /* Создание корзины товаров */
// const card = {
//  items: [],
//  getItems() {
//   return this.items;
//  },
//  add(product) {
//   for (const item of this.items) {
//    if (item.name === product.name) {
//     item.qanntity += 1;
//     return;
//    }
//   }
//   const newProduct = {
//    ...this.items,
//    qanntity: 1,
//   };

//   this.items.push(product);
//  },
//  remove(productName) {
//   for (let i = 0; i <= this.items.length; i += 1) {
//    const item = this.items[i];
//    if (productName === item.name) {
//     this.items.splice(i, 1);
//     return;
//    }
//   }
//  },
//  clear() {
//   this.items = [];
//  },
//  countTotalPrice() {
//   let total = 0;

//   for (const item of this.items) {
//    total += item.price;
//   }
//   return total;
//  },
//  increaseQuantity() {},
//  decreaceQuantity() {},
// };

// // Change code below this line
// card.add({ name: 'tomato', price: '50' });
// card.add({ name: 'cherry', price: '50' });
// card.add({ name: 'apple', price: '50' });
// card.add({ name: 'banana', price: '50' });

// console.table(card.getItems());

// card.remove('apple');
// console.table(
//  card.getItems()
// ); /* Находим товар среди нашей корзины, если такой есть - удаляем */

// card.clear();
// console.log(
//  card.getItems()
// ); /* Удаляет все товары из корзины, возвращаем пустой массив */

// console.log(countTotalPrice());

class User {
 email;

 constructor(email) {
  this.email = email;
 }

 get email() {
  return this.email;
 }

 set email(newEmail) {
  this.email = newEmail;
 }
}

class Admin extends User {
 // Change code below this line

 static AccessLevel = {
  BASIC: 'basic',
  SUPERUSER: 'superuser',
 };

 constructor(email, accessLevel) {
  super(email);
  this.accessLevel = accessLevel;
 }

 // Change code above this line
}

const mango = new Admin({
 email: 'mango@mail.com',
 accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"
