import { CreditCard } from './../entity/CreditCard.entity';

export enum CardType {
    Debito = 'debito',
    Credito = 'credito',
    Refeicao = 'ref',
    Alimentacao = 'alm'
} 

export default interface BasicCard {
    cvv: number
    cardNumber: number
    cardName: string
    expireDate: string
    type: CardType
}

// TODO - colocar todos os tipos de entidades abaixo e inserir no handler da service
export default interface handlerCard {
    credito: CreditCard
    debito: any
}