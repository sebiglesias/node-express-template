import express from 'express'
import cors from 'cors'

import exampleRouter from './routes/exampleRoute'

const app = express()

app.use(express.json())
app.use(cors())

// routes
app.use(exampleRouter)

app.listen(3001, () => console.log('Server started'))
