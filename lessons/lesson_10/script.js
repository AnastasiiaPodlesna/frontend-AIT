console.log('hello js!');  // тест подключения
// console.log(document); // вывели в консоль глобальный объект document в виде html тегов (более читабельный вид)
// console.dir(Document); // вывели в консоль объект document со всеми вложенными свойствами (более строгий вид)

const heading = document.querySelector('h1');
heading.style.color = 'orange';

const btnChange = document.querySelector('#btn-change');

btnChange.addEventListener('click', () => {
    heading.style.color = 'green';
});

const btnCreate = document.querySelector('#btn-create');

btnCreate.addEventListener('click', () => {
   let newElement = document.createElement('p')
   newElement.innerText = "Кажется я начинаю понимать этот DOM..."
   document.body.append(newElement);
});