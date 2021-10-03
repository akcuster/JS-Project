const express = require("express")
const logger = require("morgan")

const app = express()

module.exports = app
app.use(logger("tiny"))
app.get("/", (req, res) => {
    res.send("Hello world")
})

