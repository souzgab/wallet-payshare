
import {Express, Router} from 'express'
import {cardRoutes} from '../controller/routes/card.routes'

export const setupRoutes = (app: Express): void => {
    app.use(cardRoutes)
}

// try {
//     fs.readdir('src/controller/routes', (err, files) => {
//         files.map(file => {
//             console.log(file)
//             app.use(require(`./src/controller/routes/`.concat(file)))
//         })
//     })
// } catch (error) {
//     console.log(error)
// }