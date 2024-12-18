const gridWhether = document.querySelector('#grid-whether')

async function fetchWhether() {
    const res = await fetch("https://get.geojs.io/v1/ip/geo.json")
    const data = await res.json() 
   
    // const {city, latitude, longitude} = data     - запись с деструктуризацией, где data - источник данных

    // создаем карточку с данными
    const card = document.createElement('div')
    card.className ="whether-card" 

    // регион
    const heading = document.createElement("p")
    heading.textContent = `Region: ${data.region}`;

    // город
    const city = document.createElement("p")
    city.textContent = `City: ${data.timezone}`;

    // широта latitude
    const latitude = document.createElement("p")
    latitude.textContent = `Latitude: ${data.latitude}`;
  
    // долгота
    const longitude = document.createElement("p")
    longitude.textContent = `Longitude: ${data.longitude}`;

//------------------------------------------------------------------------------------------------------

const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${data.latitude}&longitude=${data.longitude}&current_weather=true`

    // второй запрос 

    const weatherRes = await fetch(weatherUrl)
    const weatherData = await weatherRes.json()

    const { temperature, windspeed, weathercode } = weatherData.current_weather

     // температура
     const temp = document.createElement("p");
     temp.textContent = `Temperature: ${temperature}°C`; 
 
     // скорость ветра
     const wind = document.createElement("p");
     wind.textContent = `Wind Speed: ${windspeed} km/h`
 
     // код погоды (дождь, ясно....)
     const weather = document.createElement("p");
     weather.textContent = `Weather Code: ${weathercode}`;
   
    // добавляем в карточку
    card.append(heading, city, latitude, longitude, temp, wind, weather);
    // добавляем в родитель
    gridWhether.append(card)
}

fetchWhether()

  