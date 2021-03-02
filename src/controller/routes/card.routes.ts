import { Router } from 'express';
import { body } from 'express-validator'
import cardController from '../handles/card.controller';

const cardRoutes = Router()

cardRoutes.post('/card/generate', body().exists(), cardController.createCard)
cardRoutes.get('/card/:cardNumber', cardController.findByNumber)
cardRoutes.get('/cards/:idUser', cardController.findByUserId)

export {cardRoutes} 

