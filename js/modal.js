/* Функция, которая принимает массив цен и возвращает их сумму */
const calculateTotalPrice = function (items) {
 let total = 0;

 for (const item of items) {
  total += item;
 }
 return total;
};

console.log(calculateTotalPrice([1, 2, 3]));
console.log(calculateTotalPrice([5, 9, 10, 26]));
console.log(calculateTotalPrice([19, 33, 48, 94, 57]));

/* Функция для поиска логина в массиве */
const logins = ['maybe', 'log', 'igor', 'taras'];

const findLogin = function (allLogins, loginTiFind) {
 return allLogins.includes(loginTiFind)
  ? `Пользователь ${loginTiFind} найден`
  : `Пользователь ${loginTiFind} не найден`;
};

console.log(findLogin(logins, 'lol'));
console.log(findLogin(logins, 'igor'));
console.log(findLogin(logins, 'java'));
console.log(findLogin(logins, 'maybe'));

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

console.log(findSmallesNumber([1, 2, 3]));
console.log(findSmallesNumber([5, 9, 10, 26]));
console.log(findSmallesNumber([19, -33, 48, 94, 57]));
