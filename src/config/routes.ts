
import {Express} from 'express'
import {cardRoutes} from '../controller/routes/card.routes'

export const setupRoutes = (app: Express): void => {
    app.use(cardRoutes)
}