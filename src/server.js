import express from 'express'
import logger from 'morgan'
import path, {dirname} from 'path'
import color from 'chalk'
import { fileURLToPath} from 'url'

const __dirname = fileURLToPath(dirname(import.meta.url))
const port = 4000

let app = express()

app.use(logger("tiny"))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(__dirname))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
})

app.listen(port, () => console.log(`The server is listening on port ${color.green(port)}`))



