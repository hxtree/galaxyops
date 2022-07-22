export enum Attribute {
    Experience = 'Experience',
    Life = 'Life',
    Power = 'Power',
    Speed = 'Speed',
    Wisdom = 'Wisdom',
    Intelligence = 'Intelligence',
    Defense = 'Defense',
    Accuracy = 'Accuracy',
    Evasion = 'Evasion',
    Luck = 'Luck',
    Trait = 'Trait',
}


/**
 * A human or non-humanoid character.
 */
export abstract class BaseCharacter {
    protected abstract _name: string;
    protected abstract _description: string;
    protected abstract _affiliation: Array<string>;

    protected _attributes: { [key in Attribute]: number } = {
        Experience: 0,
        Life: 0,
        Power: 0,
        Speed: 0,
        Wisdom: 0,
        Intelligence: 0,
        Defense: 0,
        Accuracy: 0,
        Evasion: 0,
        Luck: 0,
        Trait: 0,
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    get affiliation(): Array<string> {
        return this._affiliation;
    }

    get attributes(): { [key in Attribute]: number } {
        return this._attributes;
    }   
}