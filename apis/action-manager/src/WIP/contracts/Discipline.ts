import { Effects } from "./../../Effects";

export abstract class Disipline {
    protected abstract name: string;
    protected abstract description: string;

    private _experience: number;
    
    constructor(experience: number) {
        this._experience = experience;
    }
    
    public get experience(): number {
        return this._experience;
    }

    public set experience(experience: number) {
        this._experience = experience;
    }

    public get level(): number {
        return Math.floor(Math.sqrt(this._experience / 100));
    }

    public get nextLevel(): number {
        return (this._experience - (this.level * (this.level - 1) / 2) * 100);
    }

    public get experienceToNextLevel(): number {
        return this.nextLevel - this.experience;
    }

    public get experienceToNextLevelPercentage(): number {
        return this.experienceToNextLevel / this.nextLevel;
    }

    // todo should be able to add action
    // should be able to improve stats
    abstract get effects(): Effects;
}

export type Disiplines = Array<Disipline>;