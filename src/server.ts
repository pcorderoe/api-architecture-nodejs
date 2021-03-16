import * as express from 'express'
import cors, { CorsOptions } from 'cors'
import * as corsOptions from './configs/cors'
import { json, urlencoded } from 'body-parser'
import * as morgan from "morgan";

import * as SwaggerUi from 'swagger-ui-express'
import { swaggerDocument } from './configs/swagger'

import { pub, api } from './routes/index'


const app = express()

const { NODE_ENV, PORT = 3000 } = process.env


app.use(morgan(NODE_ENV == 'development' ? 'dev' : 'tiny'))
app.use(cors(<CorsOptions>corsOptions))
app.use(json())
app.use(urlencoded({ extended: true }))
app.use('/docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocument))


app.use('/', pub)
app.use('/api', api)

//app.use('*', handleApiResponse)


app.listen(PORT, () => {
    console.info(`Server started at http://localhost:${PORT}`)
})
