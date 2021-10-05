import { elementSearchButton,
    elementSearchedCity,
    elementWeatherBox,
    elementLoadingText,
    elementWeatherTemperature,
    elementWeatherCityName,
    elementWeatherDescription
} from './elements.js'
import { Http } from './Http.js'

const appID = ''
const searchWeather = () => {
    const cityName = elementSearchedCity.value.trim()
    if (cityName.length == 0) {
        return alert('Please enter a city name')
    }
    const url = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid={appID}&units=metric`

    Http.fetchData(url)
        .then(responseData => {

        })
        .catch(error => alert(error))
}

elementSearchButton.addEventListener('click', searchWeather)

