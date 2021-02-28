
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
