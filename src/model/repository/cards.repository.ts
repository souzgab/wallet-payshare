import { Card } from '../entity/Card.entity';
import { getConnection } from 'typeorm'
import bcrypt from 'bcrypt'

export class CardsRepository {
    public async createCard(card: Card): Promise<Card>{

        card.cardNumberFourStart = card.cardNumber.substr(0, 4)
        card.cardNumberFourEnd = card.cardNumber.substr(12, 15)
        card.cvv = bcrypt.hashSync(card.cvv, 10)

        const CardEntity = await getConnection()
        .getRepository(Card)
        .create(card)
        
        return await getConnection().getRepository(Card)
        .save(CardEntity)
    }

    public async findByNumber(cardNumber: string): Promise<any | undefined> {
        try {
            const x = await getConnection().getRepository(Card)
            .findOne({
                where: {
                    cardNumber: cardNumber
                }
            })
            return x
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    public async findUser(idUser: any): Promise<any> {
        try {
            const resp = await getConnection()
            .getRepository(Card)
            .findOne({
                where: {
                    idUsuario: idUser
                }
            })

            console.log(resp)
            return resp
        } catch (error) {
            console.log(error)
        }
    } 

    public async findByUserId(idUser: any): Promise<Card[]> {
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