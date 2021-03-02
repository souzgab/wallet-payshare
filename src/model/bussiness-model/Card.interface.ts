import {Document} from 'mongoose'
import { CardType } from './Cards.interface';

export default interface ICard{
    cvv: number
    cardNumber: string
    expiryDate: string
    cardName: string
    idUsuario: string
    type: CardType
}
