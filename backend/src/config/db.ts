import { Sequelize } from "sequelize-typescript";
import colors from 'colors'
import dotenv from 'dotenv'
dotenv.config()


export const db = new Sequelize(process.env.DATABASE_URL!,
    {
        models: [__dirname + '/../models/**/*'],
        logging: false
    }
)

//Conectar a base de Datos

export async function connectDB() {

    try {
        await db.authenticate()
        db.sync()
        console.log(colors.blue.bold('Conexion exitosa'))

    } catch (error) {
        console.log(error)
        console.log(colors.red.bold('Hubo un error al conectar a BD'))
    }
}

