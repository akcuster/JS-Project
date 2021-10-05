import { elementSearchButton,
    elementSearchedCity,
    elementWeatherBox,
    elementLoadingText,
    elementWeatherTemperature,
    elementWeatherCityName,
    elementWeatherDescription
} from './elements.js'

const searchWeather = () => {
    alert('clicked')
}

elementSearchButton.addEventListener('click', searchWeather)

