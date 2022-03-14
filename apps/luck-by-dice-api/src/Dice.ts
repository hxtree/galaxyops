export interface IDice {
    get max(): number;
    get min(): number;
    get facesArray(): Array<number>;
    set facesArray(faces: Array<number>);
    get faces(): number;
    set faces(value: number);
    get value(): number | undefined;
    set value(value: number | undefined);
    get bonus(): number | undefined;
    set bonus(bonus: number | undefined);
    roll(): number;
    allocateBonuses(amount: number): number;
    get total(): number;
}

/**
 * A dice has one or more faces, can be roll, features a value after rolling, and may also have a bonus
 */
export class Dice implements IDice {
    /**
     * An array containing the value for each side of the dice
     */
    private _faces: Array<number> = [];

    /**
     * the number pointing up on the surface after a roll.
     * An unrolled dice has no value.
     * the value is not the total as a dices face value may be modified by luck algorithm
     */
    private _value: number | undefined;

    /**
     * The additional amount to be added to dice value when computing total based on luck
     */
    private _bonus: number | undefined;

    public constructor(value: number | Array<number>) {
        if (typeof value === 'number') {
            this.faces = value;
        } else if (Array.isArray(value)) {
            this.facesArray = value;
        }
        this._bonus = 0;
    }

    public allocateBonuses(amount: number): number {
        if(this._value === undefined){
            return amount;
        }

        const potential = this.max - this._value;
        if(amount > potential){
            this._bonus = potential;
            return amount - potential;    
        } else {
            this._bonus = amount;
            return 0;
        }
    }
    /**
     * Get the maximum value that the dice could potentially roll
     */
    public get max(): number {
        return Math.max.apply(null, this._faces);
    }

    /**
     * Get the minimal value that the dice could potentially roll
     */
    public get min(): number {
        return Math.min.apply(null, this._faces);
    }

    /**
     * Get all faces of the dice
     */
    public get facesArray(): Array<number> {
        return this._faces;
    }

    /**
     * Set the faces of the dice manually using an array.
     * Use this to set abnormal faces, e.g. a dice with even faces [2,4,6] or a loaded dice [6]
     */
    public set facesArray(faces: Array<number>) {
        this._faces = faces;
    }

    /**
     * Get total number of faces on dice. Faces is not the max.
     * A dice may only have a face 1 and another face 3 which would return 2 faces.
     */
    public get faces(): number {
        return this._faces.length;
    }

    /**
     * Set faces on dice using range 1 to value provided.
     */
    public set faces(value: number) {
        for (let i = 1; i <= value; i++) {
            this._faces.push(i);
        }
    }

    /**
     * Get value, the amount resulting from rolling dice
     */
    public get value(): number | undefined {
        return this._value;
    }

    /**
     * Set value, the amount resulting from rolling dice
     */
    public set value(value: number | undefined) {
        this._value = value;
    }

    /**
     * Get bonus
     */
    public get bonus(): number | undefined {
        return this._bonus;
    }

    /**
     * Set bonus
     */
    public set bonus(bonus: number | undefined) {
        this._bonus = bonus;
    }

    /**
     * Roll the dice thereby setting the dices value
     * @returns roll outcome
     */
    public roll(): number {
        if (this._faces === undefined) {
            throw new RangeError('Faces undefined');
        }

        this._value = this._faces[Math.floor(Math.random() * this._faces.length)];

        return this._value;
    }

    /** The dices value with bonus from luck applied */
    public get total(): number {
        if (this._value === undefined) {
            throw new RangeError('Value undefined');
        }

        if (this._bonus === undefined) {
            return this._value;
        }

        return this._value + this._bonus;
    }
}
