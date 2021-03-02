import { Card } from '../entity/Card.entity';
import { getConnection, getRepository } from 'typeorm'
import bcrypt from 'bcrypt'

export class CardsRepository {
    public async createCard(card: Card): Promise<Card>{

        card.cardNumberFourStart = card.cardNumber.substr(0, 4)
        card.cardNumberFourEnd = card.cardNumber.substr(12, 15)
        card.cvv = bcrypt.hashSync(card.cvv, 10)

        const CardEntity = await getConnection()
        .getRepository(Card)
        .create(card)
        
        console.log(card)
        return await getConnection().getRepository(Card)
        .save(CardEntity)
    }

    public async findByNumber(cardNumber: string): Promise<Card | undefined> {
        return await getConnection().getRepository(Card)
        .findOne({
            where: {
                cardNumber: cardNumber
            }
        })
    }

    public async findUser(idUser: string): Promise<any> {
        return await getConnection()
        .getRepository(Card)
        .findOne({
            where: {
                idUsuario: idUser
            }
        })
    } 

    public async findByUserId(idUser: string): Promise<Card[]> {
        return await getConnection()
        .getRepository(Card)
        .find({
            where: {
                idUsuario: idUser
            }
        })
    }
}

export default new CardsRepository()