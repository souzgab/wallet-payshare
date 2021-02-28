import { Card } from '../model/entity/Card.entity';
import cardsRepository from "../model/repository/cards.repository"

export class CardsService {
    public async createCard(card: Card): Promise<boolean> {
        let result: any
        try {
            if(await cardsRepository.findByNumber(card.cardNumber)) {
                return false
            } else {
                result = await cardsRepository.createCard(card)
            }
        } catch (error) {
            return error
        }
        return result
    }

    public async findByNumber(cardNumber: number): Promise<any> {
        let result: any
        try {
            const card = await cardsRepository.findByNumber(cardNumber)
            if(!card) {
                return false
            } else {
                return card
            }
        } catch (error) {
            return error
        }
        return result
    } 
}

export default new CardsService()