import { Card } from '../entity/Card.entity';
import { getConnection, getRepository } from 'typeorm'


export class CardsRepository {
    public async createCard(card: Card): Promise<Card>{
        const CardEntity = await getConnection().getRepository(Card)
        .create(card)

        return await getConnection().getRepository(Card)
        .save(CardEntity)
    }

    public async findByNumber(cardNumber: number): Promise<any> {
        const resp = await getRepository(Card)
        .findOne({
            where: {
                cardNumber: cardNumber
            }
        })
        return resp
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