import { createConnection } from 'typeorm';
createConnection({
    type: "mongodb",
    url: process.env.URL_MONGO,
    useNewUrlParser: true,
    synchronize: true,
    logging: ["query", "error"],
    useUnifiedTopology:true,
    entities: ["./src/model/entity/*.ts"],
    migrationsRun: false,
    migrations: ["disc/src/model/migrations/*.js"],
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false
      }
    },
    cli: {
        migrationsDir: "dist/src/model/migrations"
    }
}).then(conn => {
    console.log('Server Conectado: ',conn.isConnected)
    console.log('Succeffully connected to DB - MongoDB')
}).catch(e => console.log(e))