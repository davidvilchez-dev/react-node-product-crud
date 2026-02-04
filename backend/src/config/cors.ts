import { CorsOptions } from "cors"

export const corsOptions: CorsOptions = {
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
