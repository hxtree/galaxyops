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
export declare class Dice implements IDice {
    /**
     * An array containing the value for each side of the dice
     */
    private _faces;
    /**
     * the number pointing up on the surface after a roll.
     * An unrolled dice has no value.
     * the value is not the total as a dices face value may be modified by luck algorithm
     */
    private _value;
    /**
     * The additional amount to be added to dice value when computing total based on luck
     */
    private _bonus;
    constructor(value: number | Array<number>);
    allocateBonuses(amount: number): number;
    /**
     * Get the maximum value that the dice could potentially roll
     */
    get max(): number;
    /**
     * Get the minimal value that the dice could potentially roll
     */
    get min(): number;
    /**
     * Get all faces of the dice
     */
    get facesArray(): Array<number>;
    /**
     * Set the faces of the dice manually using an array.
     * Use this to set abnormal faces, e.g. a dice with even faces [2,4,6] or a loaded dice [6]
     */
    set facesArray(faces: Array<number>);
    /**
     * Get total number of faces on dice. Faces is not the max.
     * A dice may only have a face 1 and another face 3 which would return 2 faces.
     */
    get faces(): number;
    /**
     * Set faces on dice using range 1 to value provided.
     */
    set faces(value: number);
    /**
     * Get value, the amount resulting from rolling dice
     */
    get value(): number | undefined;
    /**
     * Set value, the amount resulting from rolling dice
     */
    set value(value: number | undefined);
    /**
     * Get bonus
     */
    get bonus(): number | undefined;
    /**
     * Set bonus
     */
    set bonus(bonus: number | undefined);
    /**
     * Roll the dice thereby setting the dices value
     * @returns roll outcome
     */
    roll(): number;
    /** The dices value with bonus from luck applied */
    get total(): number;
}
