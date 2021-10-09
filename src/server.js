import 'dotenv/config'
import express from 'express'
import rateLimit from 'express-rate-limit'
import cors from 'cors'
import path, {dirname} from 'path'
import color from 'chalk'
import { fileURLToPath } from 'url'
import weather from './weather/index.js'

const __dirname = fileURLToPath(dirname(import.meta.url))
const port = 4000
const app = express()
const whitelist = ['http://localhost:4000']

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    optionsSuccessStatus: 200
}

const limiter = rateLimit({
    windowMs: 1000,
    max: 6
})

app.use(express.json())
app.use(cors(corsOptions))
app.use(limiter)
app.use(express.static(path.join(__dirname, 'public')))
app.use("/weather", weather)

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
})


app.listen(port, () => console.log(`The server is listening on port ${color.green(port)}`))



