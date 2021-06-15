import { Card } from '../model/entity/Card.entity';
import cardsRepository from "../model/repository/cards.repository"
import bcrypt from 'bcrypt'

export class CardsService {
    public async createCard(card: Card): Promise<any> {
        let result: any
        try {
            if(await cardsRepository.findByNumber(card.cardNumber)) {
                return { message: "Card already in" }
            } else {
                if(await cardsRepository.createCard(card)) {
                    result = { message: "Successfully Created!" }
                }
            }
        } catch (error) {
            throw new Error(error)
        }
        return result
    }

    public async findByNumber(cardNumber: string, cvv: string): Promise<any> {
        let result: any
        try {
            const card = await cardsRepository.findByNumber(cardNumber)
            if(!card) {
                console.log("Não Encontrado findByNumber")
                return false
            } else {
                if (await bcrypt.compare(cvv, card.cvv)) {
                    result = card
                    return result
                } else {
                    return false
                }
            }
        } catch (error) {
            return error
        }
    } 

    public async findByUserId(idUser: any): Promise<any> {
        try {
            const user = await cardsRepository.findUser(Number(idUser))
            if(user){
                const cards = await cardsRepository.findByUserId(Number(idUser))
                return cards
            } else {
                return false
            }
        } catch (error) {
            return error 
        }
    }
}

export default new CardsService()