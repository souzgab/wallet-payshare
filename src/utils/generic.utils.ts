
export class GenericUtils{
    public getYear(): string {
        return new Date().getFullYear().toString()
    }
}

export default new GenericUtils()