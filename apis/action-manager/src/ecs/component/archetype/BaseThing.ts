export class BaseThing {
    /**
     * The player instance id that the thing is associated with
     */
    protected _instanceId: string;

    /** 
     * The areaId the thing exists in within the instance
     */
    protected _areaId: string;

    /**
     * The id of the thing
     */
    protected _id: string;

    protected _position_x: number;
    protected _position_y: number;
    protected _position_z: number;

    /**
     * The name of the thing
     */
    protected _name: string;

    // how long has the thing been in existance
    protected _age: number;    

    /**
     * The weight of the thing
     */
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

    public get age(): number {
        return this._age;
    }

    public set age(age: number) {
        this._age = age;
    }
   
}
