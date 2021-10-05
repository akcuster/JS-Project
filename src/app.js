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
import { apiKey } from './resources/properties.js'

const searchWeather = () => {
    const cityName = elementSearchedCity.value.trim()
    if (cityName.length == 0) {
        return alert('Please enter a city name')
    }
    elementLoadingText.style.display = 'block'
    elementWeatherBox.style.display = 'none'
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`

    Http.fetchData(url)
        .then(responseData => {
            const weatherData = new WeatherData(cityName, responseData.weather[0].description.toUpperCase())
            const weatherProxy = new Proxy(weatherData, weatherProxyHandler)
            weatherProxy.temperature = responseData.main.temp
            updateWeather(weatherProxy)
        })
        .catch(error => alert(error))
}

const updateWeather = weatherData => {
    elementWeatherCityName.textContent = weatherData.cityName
    elementWeatherDescription.textContent = weatherData.description
    elementWeatherTemperature.textContent = weatherData.temperature

    elementLoadingText.style.display = 'none'
    elementWeatherBox.style.display = 'block'
}

elementSearchButton.addEventListener('click', searchWeather)

