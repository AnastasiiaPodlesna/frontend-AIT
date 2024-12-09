// Создайте массив с элементами: "Мария", "Алексей", "Елена", "Дмитрий". Создайте массив с возрастами: 22, 31, 45, 53. Создайте новый массив, заполнив его элементами в формате "имя возраст лет/годов".

let names = ["Мария", "Алексей", "Елена", "Дмитрий"];
let ages = [22, 31, 45, 53];
let result = [];

for (let i = 0; i < names.length; i++) 
{
  const age = ages[i];
  let yearWord = "лет"; // по умолчанию "лет"
  if (age % 10 === 1 && age % 100 !== 11) {   // если возраст заканчивается на 1, но не 11, то "год"
    yearWord = "год";
  } else if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)) { // если возраст заканчивается на 2, 3 или 4, но не на 12, 13, 14 и т. д., то используем "года".
    yearWord = "года";
  }
  result.push(names[i] + " " + ages[i] + " " + yearWord); // result.push('${names[i]} ${ages[i]} yearWord');
}
console.log(result);

// Используя методы массива, получите из этого массива новый массив, в котором элементы идут в обратной последовательности.

let reverseResult = result.reverse();
console.log(reverseResult);

// Создайте пустой массив countries. Добавьте в массив следующие страны: "Франция", "Германия", "Италия". Удалите последний элемент из массива и сохраните значение в переменной. Добавьте его в начало массива. Выведите countries в консоль.
let countries = [];
countries.push("Франция", "Германия", "Италия");
console.log(countries);
let lastElement = countries.pop();
countries.unshift(lastElement);
console.log(countries);

// Создайте массив с числами 1, 2, 3, 4, 5. Используя цикл for:
// Умножьте каждый элемент на 2 и выведите результат в консоль.
// Создайте новый массив, где каждый элемент будет равен квадрату элемента из исходного массива.
// Выведите оба массива (исходный и новый) в консоль.

let arrayNumbers = [];
for (let i = 1; i <= 5; i++) 
{
    arrayNumbers.push(i);
}
console.log(arrayNumbers);

let arrayMulNumbers = [];
for (let i = 0; i < 5; i++) 
{
    arrayMulNumbers.push(arrayNumbers[i] * 2);
}
console.log(arrayMulNumbers);

let arraySquareNumbers = [];
for (let i = 0; i < 5; i++) 
{
    arraySquareNumbers.push(arrayNumbers[i] ** 2);
}

console.log(arrayNumbers);
console.log(arraySquareNumbers);

