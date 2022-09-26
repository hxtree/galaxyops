export declare enum DisciplineCategory {
    PROFESSION = "Profession",
    ARCHETYPE = "Archetype"
}
export declare enum Discipline {
    NINJA = "Ninja",
    AMBER_ASSASSIN = "Amber Assassin",
    ELITE_ASSASIN = "Elite Assasin",
    THIEF = "Thief",
    CHEERLEADER = "Cheerleader",
    MADIEN = "Madien",
    KEEPER = "Keeper",
    BARD = "Bard",
    DUELIST = "Duelist",
    KNIGHT = "Knight",
    RUNE_KING = "Rune King",
    GAURD = "Gaurd",
    BODY_BUILDER = "Body Builder",
    COMMANDER = "Commander",
    ENGINEER = "Engineer",
    LIGHTENING_WARRIOR = "Lightening Warrior",
    REBEL = "Rebel",
    SOLIDER = "Solider",
    XSOLIDER = "XSolider",
    BERSERKER = "Berserker",
    ONI = "Oni",
    GYMNAST = "Gymnast",
    POSSESSED = "Possessed",
    SCOUT = "Scout",
    OUROBOROS = "Ouroboros",
    WIZARD = "Wizard",
    HISTORIAN = "Historian",
    MAGI = "Magi",
    WARRIOR = "Warrior"
}
export declare abstract class BaseDiscipline {
    protected abstract _name: string;
    protected abstract _description: string;
    protected abstract _category: DisciplineCategory;
    protected _experience: number;
    constructor(experience?: number);
    get level(): number;
    get nextLevel(): number;
    get experienceToNextLevel(): number;
    get experienceToNextLevelPercentage(): number;
    get effects(): Array<string>;
}
