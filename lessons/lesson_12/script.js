console.log('hello word');

let numbers = [1, 2, 3, 4, 5];
let fruits = ['orange', 'apple', 'banana'];

let item1 = fruits[0];

let item2 = fruits[0]; // undefined !

let array = [1, 'strawberry', false, undefined];  // можем создавать массивы из разных типов данных, но это не нужно
console.log(numbers, array);

let length = array.length; // вывод длины массива
console.log('длина массива array => ', length);

// push(), pop() = мутирующие методы

fruits.push('pineapple'); // push добавляет в конец массива новый элемент и возвращает количество элементов в массиве
console.log(fruits);

fruits.pop();// pop удаляет последний элемент массива и возвращает удаленный элемент
console.log(fruits);

for (let i = 0; i < fruits.length; i++) 
{
   console.log(i, '=> ', fruits[i]);
};

let planet = 'Planet Earth';
let planetLength = planet.length;
let lowerCase = planet.toLowerCase(); // приведение к нижнему регистру
console.log(lowerCase);
let upperCase = planet.toUpperCase(); // приведение к верхнему регистру
console.log(upperCase);

let substring = planet.substring(0, 6); // подстрока
console.log(substring);


console.log(lowerCase);
firstChar = lowerCase.substring(0, 1);
firstChar = firstChar.toUpperCase();
console.log(firstChar);

let str = firstChar.concat(lowerCase.substring(1, 12));
console.log(str);

// shift(), unshift() - мутирующие методы для работы с началом массивов

let planets = ['Mars', 'Venus', 'Earth', 'Saturn']

planets.shift(); // метод удаляет первый элемент массива и возвращает удаленный элемент
console.log(planets);
planets.unshift('Mercury');  // метод добавляет элемент в начало и возвращает длину массива
console.log(planets);

