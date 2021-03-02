import { createConnection } from 'typeorm';
import dotenv from 'dotenv'
dotenv.config()

createConnection({
    type: "mongodb",
    url: process.env.URL_MONGO,
    useNewUrlParser: true,
    logging: true,
    useUnifiedTopology:true,
    entities: ["dist/src/model/entity/*.js"],
    migrationsRun: false,
    migrations: ["disc/src/model/migrations/*.js"],
    ssl: true
}).then(conn => {
    console.log('Server Conectado: ',conn.isConnected)
    console.log('Succeffully connected to DB - MongoDB')
}).catch(e => console.log(e))