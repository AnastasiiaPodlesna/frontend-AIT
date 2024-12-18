const gridWhether = document.querySelector('#grid-whether')
const loadingContainer = document.querySelector('#loading-container');

async function fetchWhether() {

    loadingContainer.style.display = 'flex'; // запускаем лоадер

    const res = await fetch("https://get.geojs.io/v1/ip/geo.json")
    const data = await res.json()

    // const {city, latitude, longitude} = data     - запись с деструктуризацией, где data - источник данных

    // создаем карточку с данными
    const card = document.createElement('div')
    card.className = "whether-card"

    // регион
    const heading = document.createElement("p")
    heading.textContent = `Region:  ${data.region}`;

    // город
    const city = document.createElement("p")
    city.textContent = `City:  ${data.timezone}`;

    // широта latitude
    const latitude = document.createElement("p")
    latitude.textContent = `Latitude:  ${data.latitude}`;

    // долгота
    const longitude = document.createElement("p")
    longitude.textContent = `Longitude:  ${data.longitude}`;

    //------------------------------------------------------------------------------------------------------

    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${data.latitude}&longitude=${data.longitude}&current_weather=true`

    // второй запрос 

    const weatherRes = await fetch(weatherUrl)
    const weatherData = await weatherRes.json()

    const { temperature, windspeed, weathercode } = weatherData.current_weather

    setTimeout(() => {
        loadingContainer.style.display = 'none'; // Скрываем лоадер после задержки
    }, 2000); // скрываем лоадер через 2 секунды

    // температура
    const temp = document.createElement("p");
    temp.textContent = `Temperature:  ${temperature}°C`;

    // скорость ветра
    const wind = document.createElement("p");
    wind.textContent = `Wind Speed:  ${windspeed} km/h`

    // код погоды (дождь, ясно....)
    const weather = document.createElement("p");
    weather.textContent = `Weather:  ${getWeather(weathercode)}`;

    // добавляем в карточку
    card.append(heading, city, latitude, longitude, temp, wind, weather);
    // добавляем в родитель
    gridWhether.append(card)

    // функция, расшифровывающая код погоды

    function getWeather(weatherCode) {
        switch (weatherCode) {
            case 0:
                return 'Clear sky ☀️';
            case 1:
                return 'Mainly clear 🌤️';
            case 2:
                return 'Partly cloudy 🌤️';
            case 3:
                return 'Overcast 🌥️';
            case 45:
                return 'Fog 🌁';
            case 48:
                return 'Depositing rime fog 🌁';
            case 51:
                return 'Drizzle: light 🌦️';
            case 53:
                return 'Drizzle: moderate 🌧️';
            case 55:
                return 'Drizzle: dense intensity 🌧️🌧️';
            case 56:
                return 'Freezing Drizzle: light 🌦️';
            case 57:
                return 'Freezing Drizzle: dense intensity 🌧️🌧️';
            case 61:
                return 'Rain: slight 🌧️';
            case 63:
                return 'Rain: moderate 🌧️🌧️';
            case 65:
                return 'Rain: heavy intensity 🌧️🌧️☂️';
            case 66:
                return 'Freezing Rain: light 🌨️';
            case 67:
                return 'Freezing Rain: heavy intensity 🌨️🌨️';
            case 71:
                return 'Snow fall: slight ❄️';
            case 73:
                return 'Snow fall: moderate ❄️❄️';
            case 75:
                return 'Snow fall: heavy intensity ❄️❄️❄️';
            case 77:
                return 'Snow grains ❄️';
            case 80:
                return 'Rain showers: slight 🌧️❄️';
            case 81:
                return 'Rain showers: moderate 🌧️❄️❄️';
            case 82:
                return 'Rain showers: violent 🌧️❄️❄️❄️';
            case 85:
                return 'Snow showers: slight 🌧️❄️❄️';
            case 86:
                return 'Snow showers: heavy 🌧️❄️❄️❄️';
            case 95:
                return 'Thunderstorm: Slight or moderate ⛈️';
            case 96:
                return 'Thunderstorm with slight ⛈️⛈️';
            case 99:
                return 'Thunderstorm with heavy hail ⛈️⛈️⛈️';
            default:
                return 'Unknown weather condition 🌁';
        }
    }
}

fetchWhether()

