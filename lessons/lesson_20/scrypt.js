const gridWhether = document.querySelector('#grid-whether')

async function fetchWhether() {
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

    // температура
    const temp = document.createElement("p");
    temp.textContent = `Temperature:  ${temperature}°C`;

    // скорость ветра
    const wind = document.createElement("p");
    wind.textContent = `Wind Speed:  ${windspeed} km/h`

    // код погоды (дождь, ясно....)
    const weather = document.createElement("p");
    weather.textContent = `Weather Code:  ${getWeather(weathercode)}`;

    // добавляем в карточку
    card.append(heading, city, latitude, longitude, temp, wind, weather);
    // добавляем в родитель
    gridWhether.append(card)

    // функция, расшифровывающая код погоды

    function getWeather(weatherCode) {
        switch (weatherCode) {
            case 0:
                return 'Clear sky';
            case 1:
            case 2:
            case 3:
                return 'Mainly clear, partly cloudy, and overcast';
            case 45:
            case 48:
                return 'Fog and depositing rime fog';
            case 51:
            case 53:
            case 55:
                return 'Drizzle: Light, moderate, and dense intensity';
            case 56:
            case 57:
                return 'Freezing Drizzle: Light and dense intensity';
            case 61:
            case 63:
            case 65:
                return 'Rain: Slight, moderate, and heavy intensity';
            case 66:
            case 67:
                return 'Freezing Rain: Light and heavy intensity';
            case 71:
            case 73:
            case 75:
                return 'Snow fall: Slight, moderate, and heavy intensity';
            case 77:
                return 'Snow grains';
            case 80:
            case 81:
            case 82:
                return 'Rain showers: Slight, moderate, and violent';
            case 85:
            case 86:
                return 'Snow showers slight and heavy';
            case 95:
                return 'Thunderstorm: Slight or moderate';
            case 96:
            case 99:
                return 'Thunderstorm with slight and heavy hail';
            default:
                return 'Unknown weather condition';
        }
    }
}

fetchWhether()

