import express from 'express'
import dotenv from 'dotenv'
import './src/config/config'
import { setupRoutes } from './src/config/routes';
import { setupMiddlewares } from './src/utils/middlewares'

dotenv.config()

const app = express();

setupMiddlewares(app)
setupRoutes(app)

const PORT: string|number = process.env.PORT || 4040;
app.listen(PORT, () => console.log('Server on port: localhost:'.concat(PORT.toString())))