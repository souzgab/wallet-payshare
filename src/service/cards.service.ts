import { Card } from '../model/entity/Card.entity';
import cardsRepository from "../model/repository/cards.repository"
import bcrypt from 'bcrypt'
import cardValidator from 'card-validator'

export class CardsService {
    public async createCard(card: Card): Promise<any> {
        let result: any
        try {
            if(await cardsRepository.findByNumber(card.cardNumber)) {
                return { message: "Card already in" }
            } else if (cardValidator.number(card.cardNumber)) {
                return { message: "Wrong or Invalid Card number" }
            } else {
                if(await cardsRepository.createCard(card)) {
                    result = { message: "Successfully Created!" }
                }
            }
        } catch (error) {
            return error
        }
        return result
    }

    public async findByNumber(cardNumber: string, cvv: string): Promise<any> {
        let result: any
        try {
            const card = await cardsRepository.findByNumber(cardNumber)
            if(!card) {
                return false
            } else {
                if (await bcrypt.compare(cvv, card.cvv)) {
                    result = card
                } else {
                    result = false
                }
            }
        } catch (error) {
            return error
        }
        return result
    } 

    public async findByUserId(idUser: string): Promise<any> {
        let result: any
        try {
            if(await cardsRepository.findUser(idUser)){
                const cards = await cardsRepository.findByUserId(idUser)
                result = cards
            } else {
                result = false
            }
        } catch (error) {
            return error 
        }
        return result
    }
}

export default new CardsService()