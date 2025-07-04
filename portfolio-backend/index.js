import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRouter from './routes/contact.js'
import stravaRouter from './routes/strava.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/contact', contactRouter)
app.use('/api/strava', stravaRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
