import 'dotenv/config'
import express from 'express'
import rateLimit from 'express-rate-limit'
import cors from 'cors'
import path, {dirname} from 'path'
import color from 'chalk'
import { fileURLToPath} from 'url'

import weather from './weather/index.js'

const __dirname = fileURLToPath(dirname(import.meta.url))
const port = 4000

let app = express()

const whitelist = ['http://127.0.0.1']
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

app.use(express.json())
// app.use(cors(corsOptions))

// const limiter = rateLimit({
//     windowMs: 1000,
//     max: 1
// })
// app.use(limiter)
app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(__dirname))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
})
app.get("/", (req, res) => res.json({success: "hello world!"}))
app.use("/weather", weather)

app.listen(port, () => console.log(`The server is listening on port ${color.green(port)}`))



