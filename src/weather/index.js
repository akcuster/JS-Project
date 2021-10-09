import express from 'express'
import fetch from 'node-fetch'

const router = express.Router()

const fetchWeather = async (cityName) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.WEATHER_API_KEY}&units=metric`

    try {
        const weatherStream = await fetch(url)
        return await weatherStream.json()
    } catch (err) {
        return {Error: err.stack}
    }
}