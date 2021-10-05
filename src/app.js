import { elementSearchButton,
    elementSearchedCity,
    elementWeatherBox,
    elementLoadingText,
    elementWeatherTemperature,
    elementWeatherCityName,
    elementWeatherDescription
} from './elements.js'
import { Http } from './Http.js'
import {WeatherData, weatherProxyHandler} from "./WeatherData.js";

const appID = ''
const searchWeather = () => {
    const cityName = elementSearchedCity.value.trim()
    if (cityName.length == 0) {
        return alert('Please enter a city name')
    }
    const url = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid={appID}&units=metric`

    Http.fetchData(url)
        .then(responseData => {
            const weatherData = new WeatherData(cityName, responseData.weather[0].description.toUpperCase())
            const weatherProxy = new Proxy(weatherData, weatherProxyHandler)
            weatherProxy.temperature = responseData.main.temp
        })
        .catch(error => alert(error))
}

const updateWeather = weatherData => {
    elementWeatherCityName.textContent = weatherData.cityName
    elementWeatherDescription.textContent = weatherData.description
    elementWeatherTemperature.textContent = weatherData.temperature

    elementWeatherBox.style.display = 'block'
}

elementSearchButton.addEventListener('click', searchWeather)

