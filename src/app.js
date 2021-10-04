import { elementSearchButton,
    elementSearchedCity,
    elementWeatherBox,
    elementLoadingText,
    elementWeatherTemperature,
    elementWeatherCityName,
    elementWeatherDescription
} from './elements.js'

elementSearchButton.addEventListener('click', searchWeather)

const searchWeather = () => {
    alert('clicked')
}