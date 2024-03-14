import express from "express";
import * as conn from './db/conn.js'
import articleRouter from './routes/articlesRoutes.js'
import memberRouter from './routes/memberRoutes.js'
import eventRouter from './routes/eventRoutes.js'
import subscribeRouter from './routes/subscribeRoute.js'
import cors from 'cors'
import * as config from './config/constants.js'


const app = express()
app.use(cors())
const { PORT } = config


app.use(express.json())
app.use('/api/articles', articleRouter)
app.use('/api/members', memberRouter)
app.use('/api/events', eventRouter)
app.use('/api/subscribe', subscribeRouter)

app.listen(PORT, () => {
    console.log('server is listening at', PORT)
})