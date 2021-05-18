
export class GenericUtils{
    public getYear(): string {
        return new Date().getFullYear().toString()
    }

    
}
export const bodyCard = ['cvv', 'cardNumber']

export default new GenericUtils()