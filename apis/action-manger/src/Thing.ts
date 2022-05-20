export class Thing {
    protected _id: string;
    protected _name: string;
    protected _weight: number;    

    public get id(): string {
        return this._id;
    }

    public set id(id: string) {
        this._id = id;
    }
    
    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get weight(): number {
        return this._weight;
    }

    public set weight(weight: number) {
        this._weight = weight;
    }
}
