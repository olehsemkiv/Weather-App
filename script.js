const search_btn = document.querySelector('.search-btn');
const search_input = document.querySelector('.search-input');
const weatherImage = document.querySelector('.weather-image');
const temperature = document.querySelector('.temperature');
const city = document.querySelector('.city');
const wind = document.querySelector('.wind-value');
const humidity = document.querySelector('.humidity-value');
const apiKey = "4e3ec5b91fafbf09ca8b26531ad0ff66";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=lviv&appid=4e3ec5b91fafbf09ca8b26531ad0ff66&units=metric";

async function checkWeather(cityValue) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
    }
    let data = await response.json();
    temperature.innerHTML = Math.round(data.main.temp) + "°C";
    city.innerHTML = data.name;
    wind.innerHTML = data.wind.speed + " км/год";
    humidity.innerHTML = data.main.humidity + "%";
    if (data.weather[0].main == "Clouds") {
        weatherImage.src = "images/clouds.png"
    } else if (data.weather[0].main == "Clear") {
        weatherImage.src = "images/clear.png"
    } else if (data.weather[0].main == "Rain") {
        weatherImage.src = "images/rain.png"
    } else if (data.weather[0].main == "Drizzle") {
        weatherImage.src = "images/drizzle.png"
    } else if (data.weather[0].main == "Mist") {
        weatherImage.src = "images/mist.png"
    }
    document.querySelector('.app__body').style.display = 'block';
}

search_btn.addEventListener('click', function () {
    checkWeather(search_input.value);
})