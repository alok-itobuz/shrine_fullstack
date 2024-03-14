import * as mongoose from 'mongoose'
import { DATABASE_PASSWORD, DATABASE_URL } from '../config/constants.js'

const dbUrl = `${DATABASE_URL.replace('<%PASSWORD%>', DATABASE_PASSWORD)}/shrine`

mongoose.connect(dbUrl).then(() => {
    console.log('Connected to database successfully')
})