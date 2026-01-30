
import express, { Request, Response } from "express"
import swaggerUi from 'swagger-ui-express'
import { router } from "./router"
import { connectDB } from "./config/db"
import { swaggerSpec } from "./config/swagger"
import cors, { CorsOptions } from "cors"
import morgan from 'morgan'


//*Llamar a la conexion de BD
connectDB()

export const server = express()

//* Habilitar CORS -> Permitir conexiones externas
const corsOptions: CorsOptions = {
    origin: function (origin, callback) {
        if (origin === process.env.FRONTEND_URL) {
            callback(null, true) // -> callback(error, permitir conexion)
            console.log('Permitir')
        } else {
            callback(new Error('ERROR DE CORS'))
            console.log('denegar')
        }
    }
}

server.use(cors(corsOptions))

//* Leer datos de Formularios
server.use(express.json())

//* Detalles para peticiones que se realizan (htttp)
server.use(morgan('dev'))

//* Instancia de Express
server.use('/api/products', router)

//* Docs 
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))


//* Para test
server.use('/api', (req: Request, res: Response) => {
    res.json({ msg: 'Desde API' })
})


