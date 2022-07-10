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

export abstract class BaseCharacter {
    protected abstract _name: string;
    protected abstract _description: string;
    protected abstract _affiliation: Array<string>;

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    get affiliation(): Array<string> {
        return this._affiliation;
    }
}