import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path, {dirname} from 'path'
import color from 'chalk'
import { fileURLToPath} from 'url'

import './weather'

const __dirname = fileURLToPath(dirname(import.meta.url))
const port = 4000

let app = express()
let cors = cors()

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(__dirname))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
})
app.get("/weather")

app.listen(port, () => console.log(`The server is listening on port ${color.green(port)}`))



