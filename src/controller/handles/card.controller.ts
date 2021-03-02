import {Request, Response} from 'express'
import cardsService from '../../service/cards.service'

export class CardController {

    public async createCard(req: Request, res: Response): Promise<void> {
        try {
            const result = await cardsService.createCard(req.body)
            return result ? res.status(201).json({message: "Card has been Created", result}).end()
             : res.status(400).json({message: "Error on save or Card already exists"}).end()
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    public async findByNumber(req: Request, res: Response): Promise<void> {
        try {
            const { cardNumber } = req.params
            const result = await cardsService.findByNumber(parseInt(cardNumber))
            return result ? res.status(201).json({message: "Card has been Found!", result}).end()
             : res.status(400).json({message: "Error on finding card"}).end()
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    public async findByUserId(req: Request, res: Response): Promise<void> {
        try {
            const { idUser } = req.params
            const result = await cardsService.findByUserId(idUser)
            return result ? res.status(201).json({message: "UserCards has been Found!", result}).end()
             : res.status(400).json({message: "Error on finding card"}).end()
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }
}

export default new CardController()