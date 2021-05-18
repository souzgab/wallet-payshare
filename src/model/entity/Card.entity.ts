import { ObjectID } from "bson";
import { Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from "typeorm"
import ICard from "../bussiness-model/Card.interface"
import { CardType } from "../bussiness-model/Cards.interface";

@Entity('Card')
export class Card implements ICard{
    @ObjectIdColumn()
    id: ObjectID;

    @Column({type: 'string'})
    cvv: string 

    @Column({type: 'text'})
    cardNumber: string

    @Column({type: 'text'})
    cardNumberFourStart: string

    @Column({type: 'text'})
    cardNumberFourEnd: string

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