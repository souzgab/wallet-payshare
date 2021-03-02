import { CardType } from './Cards.interface';

export default interface ICard{
    cvv: string
    cardNumber: string
    expiryDate: string
    cardName: string
    idUsuario: string
    type: CardType
}
