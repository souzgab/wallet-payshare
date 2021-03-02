import { Router } from 'express';
import { body } from 'express-validator'
import cardController from '../handles/card.controller';

const cardRoutes = Router()

cardRoutes.post('/card/generate', body().exists(), cardController.createCard)
cardRoutes.post('/card/find', cardController.findByNumber)
cardRoutes.get('/card/:idUser', cardController.findByUserId)

export {cardRoutes} 