export abstract class BaseCharacter {
    protected abstract _name: string;
    protected abstract _description: string;

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }
}