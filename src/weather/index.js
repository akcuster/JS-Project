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

router.get("/", (req, res) => {
    res.json({ success: "Hello Weather!"})
})

router.get("/:cityName", async (req, res) => {
    const cityName = req.params.cityName
    const data = await fetchWeather(cityName)
    res.json(data)
})

router.post("/", async (req, res) => {
    const cityName = req.body.cityName
    const data = await fetchWeather(cityName)
    res.json(data)
})

export default router