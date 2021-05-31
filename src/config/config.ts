import { createConnection } from 'typeorm';
import dotenv from 'dotenv'
dotenv.config()

createConnection({
    type: "mongodb",
    url: process.env.URL_MONGO,
    useNewUrlParser: true,
    logging: 'all',
    logger: 'simple-console',
    useUnifiedTopology:true,
    entities: ["./dist/src/model/entity/*.js"],
    ssl: true
}).then(conn => {
    // await conn.connect()
    console.log('Server Conectado: ',conn.isConnected)
    console.log('Succeffully connected to DB - MongoDB')
}).catch(e => console.log(e))