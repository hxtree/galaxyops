export enum DisciplineCategory {
    PROFESSION = 'Profession',
    ARCHETYPE = 'Archetype'
}

// Combat Classes
// Specialty Classes
// Drive Classes
// Omega Classes
//  | Spirit Class | Drive Class | Omega Class

export enum Discipline {
    // penny 
    NINJA = 'Ninja',
    AMBER_ASSASSIN = 'Amber Assassin',
    ELITE_ASSASIN = 'Elite Assasin',
    THIEF = 'Thief',
    // loomee
    CHEERLEADER = 'Cheerleader',
    MADIEN = 'Madien',
    KEEPER = 'Keeper',
    // gaali
    BARD = 'Bard',
    DUELIST = 'Duelist',
    KNIGHT = 'Knight',
    RUNE_KING = 'Rune King',
    // gunter
    GAURD = 'Gaurd',
    BODY_BUILDER = 'Body Builder',
    COMMANDER = 'Commander',
    // traez
    ENGINEER = 'Engineer',
    LIGHTENING_WARRIOR = 'Lightening Warrior',
    REBEL = 'Rebel',
    // meeku
    SOLIDER = 'Solider',
    XSOLIDER = 'XSolider',
    BERSERKER = 'Berserker',
    ONI = 'Oni',
    // malace
    GYMNAST = 'Gymnast',
    POSSESSED = 'Possessed',
    SCOUT = 'Scout',
    OUROBOROS = 'Ouroboros',
    // faye
    WIZARD = 'Wizard',
    HISTORIAN = 'Historian',
    MAGI = 'Magi',
    // other
    WARRIOR = 'Warrior',
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