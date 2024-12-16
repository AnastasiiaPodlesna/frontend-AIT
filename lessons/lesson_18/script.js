// API - Application Programming Interface - интерфейс для общения программ друг с другом

const img = document.querySelector('#dog-img') // находим пустой элемент img, чтобы добавить в него данные из 
const bthUpd = document.querySelector('#btn-update') // нашли кнопку

function getDog() {   // создали функцию с fetch запросом
fetch("https://dog.ceo/api/breeds/image/random")
.then(res => res.json()) // дожидаемся сырых данных и преобразуем их в JS объект с помощью метода .json
.then(data => {          // в data уже придут данные готовые к использованию
    img.src = data.message
});
}

getDog();

bthUpd.addEventListener('click', getDog)  // по событию click будет вызываться функция getDog

// bthUpd.addEventListener('click', () => {      аналогичная запись
//    getDog() })



fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json()) // дожидаемся сырых данных и преобразуем их в JS объект с помощью метода .json
    .then(data => {          // в data уже придут данные готовые к использованию

        const img = document.getElementById("hero-img");
        const nameElement = document.getElementById("hero-name");
        const statusElement = document.getElementById("hero-status");
        const originElement = document.getElementById("hero-origin");

        img.src = data.results[1].image;

        nameElement.textContent = "Name: " + data.results[1].name;
        statusElement.textContent = "Status: " + data.results[1].status;
        originElement.textContent = "Origin: " + data.results[1].origin.name;
    })
       
 

