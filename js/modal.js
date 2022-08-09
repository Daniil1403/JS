/* Функция, которая принимает массив цен и возвращает их сумму */
const calculateTotalPrice = function (items) {
 let total = 0;

 for (const item of items) {
  total += item;
 }
 return total;
};

console.log(calculateTotalPrice([1, 2, 3])); //6
console.log(calculateTotalPrice([5, 9, 10, 26])); //50
console.log(calculateTotalPrice([19, 33, 48, 94, 57])); //251

/* Функция для поиска логина в массиве */
const logins = ['maybe', 'log', 'igor', 'taras'];

const findLogin = function (allLogins, loginTiFind) {
 return allLogins.includes(loginTiFind)
  ? `Пользователь ${loginTiFind} найден`
  : `Пользователь ${loginTiFind} не найден`;
};

console.log(findLogin(logins, 'lol')); // Пользователь lol не найден
console.log(findLogin(logins, 'igor')); //Пользователь igor найден
console.log(findLogin(logins, 'java')); //Пользователь java не найден
console.log(findLogin(logins, 'maybe')); //Пользователь maybe найден

/* Функция для поиска самого маленького числа в массиве */
const findSmallesNumber = function (numbers) {
 let smallestNumber = numbers[0];

 for (const number of numbers) {
  if (number < smallestNumber) {
   smallestNumber = number;
  }
 }
 return smallestNumber;
};

console.log(findSmallesNumber([1, 2, 3])); //1
console.log(findSmallesNumber([5, 9, 10, 26])); //5
console.log(findSmallesNumber([19, -33, 48, 94, 57])); //-33

/* Функция инвертирует в регистр (из нижнего в верхний и из верхнего в нижни) */
const changeCase = function (string) {
 const letters = string.split('');
 let inverstedString = '';

 for (const letter of letters) {
  const isInLowerCase = letter === letter.toLowerCase();
  inverstedString += isInLowerCase
   ? letter.toUpperCase()
   : letter.toLowerCase();
 }
 return inverstedString;
};

console.log(changeCase('qWerTY'));
console.log(changeCase('ManGo'));
console.log(changeCase('ajAx'));

/* Функция из строки возвращает slug (1.делаем все в маленьком регистре toLowerCase() 2. сшиваем split(' ')3.пробелы заменяем на тире join('-')) */
const slugify = function (string) {
 return string.toLowerCase().split(' ').join('-');
};

console.log(slugify('Top 10 benefits of React framework')); //top-10-benefits-of-react-framework

/* Функция add для сложения произвольного колличества аргументов (чисел) */
const add = function (...args) {
 let total = 0;
 for (const arg of args) {
  total += arg;
 }
 return total;
};
console.log(add(1, 2, 3)); // 6
console.log(add(1, 5, 6, 9, 8)); // 29
console.log(add(1, 5, 6, 9, 8, 56, 87)); // 172
