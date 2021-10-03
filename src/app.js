const express = require("express")
const logger = require("morgan")
const path = require("path")

const app = express()

module.exports = app
app.use(logger("tiny"))
app.use(express.static(path.join(__dirname, 'public')))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
})

