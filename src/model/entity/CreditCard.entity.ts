import { CardType } from '../bussiness-model/Cards.interface';
import { ObjectID } from "bson";
import { Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from "typeorm"
import ICard from "../bussiness-model/CreditCard.interface"

@Entity('card')
export class Card implements ICard{
    @ObjectIdColumn()
    id: ObjectID;

    @Column({type: 'number'})
    cvv: number 

    @Column({type: 'number'})
    cardNumber: number

    @Column({type: 'text'})
    expiryDate: string

    @Column({type: 'text'})
    type: CardType

    @Column({type: 'text'})
    cardName: string

    @Column({type: 'text'})
    idUsuario: string

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: number;
    
}

export default new Card()