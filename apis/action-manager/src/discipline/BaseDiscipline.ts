export enum DisciplineCategory {
    PROFESSION = 'Profession',
    ARCHETYPE = 'Archetype'
}

export abstract class BaseDiscipline {

    protected abstract _name: string;
    protected abstract _description: string;
    protected abstract _category: DisciplineCategory;
    protected _experience: number;

    public constructor(experience: number = 0) {
        this._experience = experience;
    }

    public get level(): number {
        return Math.floor(Math.sqrt(this._experience / 100));
    }

    public get nextLevel(): number {
        return (this._experience - (this.level * (this.level - 1) / 2) * 100);
    }

    public get experienceToNextLevel(): number {
        return this.nextLevel - this._experience;
    }

    public get experienceToNextLevelPercentage(): number {
        return this.experienceToNextLevel / this.nextLevel;
    }

    // todo load from Class
    public get effects(): Array<string> {
        return [];
    }

}