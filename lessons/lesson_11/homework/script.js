
// Создайте переменную myNumber и присвойте ей результат выражения: деление числа 100 на остаток от деления 25 на 3. Выведите значение myNumber в консоль.

let myNumber = 100 / (25 % 3); // 100
console.log(typeof myNumber);
console.log(myNumber);

// Создайте переменную myString и присвойте ей значение, которое является результатом сложения следующих строк: "Hello, ", "world", "!", и числа 2024. Выведите значение myString в консоль.

const myString = "Hello, " + "world" + "!" + 2024; // Hello, world!2024
console.log(typeof myString);
console.log(myString);

// Создайте переменную isHuman и присвойте ей результат сравнения числа 42 со строкой 42. Результатом должно стать true. Подумайте какой оператор сравнения вы будете использовать.

const isHuman = 42 == '42'; // tru, -> приведение типов
console.log(typeof isHuman);
console.log(isHuman);

// Создайте переменную myNumber и присвойте ей результат преобразования строки "123smth" в число. Выведите значение myNumber в консоль.

myNumber = parseInt("123smth"); // 123
console.log(typeof myNumber);
console.log(myNumber);
