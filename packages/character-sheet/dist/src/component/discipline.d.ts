import * as Skill from './skill';
/**
 * Experience records a character experience for a specific discipline.
 * Different disciplines have different experience requirements.
 * A character can have multiple disciplines and therefore multiple experience records.
 * Progression in one discipine may unlock other disciplines, actions, and attributes bonuses.
 */
export declare enum DisciplineCategory {
    PROFESSION = "Profession",
    ARCHETYPE = "Archetype"
}
export declare enum Discipline {
    AMBER_ASSASSIN = "Amber Assassin",
    ASSASSIN = "Assassin",
    BARD = "Bard",
    BERSERKER = "Berserker",
    BODY_BUILDER = "Body Builder",
    CHEERLEADER = "Cheerleader",
    COMMANDER = "Commander",
    COOK = "Cook",
    DUELIST = "Duelist",
    ELITE_ASSASIN = "Elite Assasin",
    ENGINEER = "Engineer",
    GAURD = "Gaurd",
    GUARDIAN = "Guardian",
    GYMNAST = "Gymnast",
    HEALER = "Healer",
    HERO = "Hero",
    HISTORIAN = "Historian",
    KEEPER = "Keeper",
    KNIGHT = "Knight",
    LIGHTENING_WARRIOR = "Lightening Warrior",
    MADIEN = "Madien",
    MAGI = "Magi",
    MAGI_BLACK = "Magi Black",
    MAGI_BLUE = "Magi Blue",
    MAGI_BROWN = "Magi Brown",
    MAGI_GREEN = "Magi Green",
    MAGI_PINK = "Magi Pink",
    MAGI_PURPLE = "Magi Purple",
    MAGI_WHITE = "Magi White",
    MAGI_YELLOW = "Magi Yellow",
    MECHANIC = "Mechanic",
    NINJA = "Ninja",
    ONI = "Oni",
    OUROBOROS = "Ouroboros",
    POSSESSED = "Possessed",
    REBEL = "Rebel",
    ROUGE = "Rouge",
    ROYALTY = "Royalty",
    RUNE_KING = "Rune King",
    SAGE = "Sage",
    SCOUT = "Scout",
    SOLIDER = "Solider",
    SUMMONER = "Summoner",
    THIEF = "Thief",
    WARRIOR = "Warrior",
    WIZARD = "Wizard",
    XSOLIDER = "XSolider"
}
export declare abstract class BaseDiscipline {
    abstract name: string;
    abstract description: string;
    abstract category: DisciplineCategory;
    prerequisites?: Discipline[];
    protected _experience: number;
    constructor(experience?: number);
    get level(): number;
    get nextLevel(): number;
    get experienceToNextLevel(): number;
    get experienceToNextLevelPercentage(): number;
    get effects(): Array<string>;
}
export declare class Gymnast extends BaseDiscipline {
    name: Discipline.GYMNAST;
    description: 'Trains in gymnastics.';
    category: DisciplineCategory.PROFESSION;
    skillProgression: [
        [
            level: 10,
            skill: Skill.Movement.BACK_FLIP
        ],
        [
            level: 25,
            skill: Skill.Movement.DOUBLE_BACK_FLIP
        ],
        [
            level: 50,
            skill: Skill.Movement.HIGH_JUMP
        ],
        [
            level: 70,
            skill: Skill.Passive.CONCENTRATION
        ]
    ];
}
export declare class Wizard extends BaseDiscipline {
    name: Discipline.WIZARD;
    description: 'Studies mysterious forces.';
    category: DisciplineCategory.PROFESSION;
    skillProgression: [
        [
            level: 10,
            skill: Skill.Spell.GUST
        ],
        [
            level: 25,
            skill: Skill.Spell.FLARE
        ],
        [
            level: 50,
            skill: Skill.Spell.HEAL
        ],
        [
            level: 70,
            skill: Skill.Spell.LIGHT
        ]
    ];
}
export declare class Historian extends BaseDiscipline {
    name: Discipline.HISTORIAN;
    description: 'Studies the world as it was.';
    category: DisciplineCategory.PROFESSION;
    skillProgression: [
        [
            level: 10,
            skill: Skill.Item.APPRIASE
        ],
        [
            level: 25,
            skill: Skill.Basic.SCAN
        ],
        [
            level: 50,
            skill: Skill.Summon.HERALDIC_LION
        ]
    ];
}
export declare class BodyBuilder extends BaseDiscipline {
    name: Discipline.BODY_BUILDER;
    description: 'Do you even lift?';
    category: DisciplineCategory.PROFESSION;
    skillProgression: [[level: 50, skill: Skill.Summon.SCRIBBLES]];
}
export declare class Cook extends BaseDiscipline {
    name: Discipline.COOK;
    description: 'Prepares and cooks food';
    category: DisciplineCategory.PROFESSION;
    skillProgression: [[level: 10, skill: Skill.Item.PREPARE_FOOD]];
}
export declare class Cheerleader extends BaseDiscipline {
    name: Discipline.CHEERLEADER;
    description: 'Cheers their team as a form of encouragement.';
    category: DisciplineCategory.PROFESSION;
    skillProgression: [
        [
            level: 1,
            skill: Skill.Basic.CHEER
        ],
        [
            level: 10,
            skill: Skill.Basic.SUPPORT
        ],
        [
            level: 40,
            skill: Skill.Basic.INSPIRE
        ],
        [
            level: 50,
            skill: Skill.Basic.HOPE
        ]
    ];
}
export declare class Commander extends BaseDiscipline {
    name: Discipline.COMMANDER;
    description: 'Specialize in giving orders to others.';
    category: DisciplineCategory.ARCHETYPE;
    skillProgression: [
        [
            level: 1,
            skill: Skill.Basic.BOAST
        ],
        [
            level: 10,
            skill: Skill.Teamwork.FORMATIONS
        ],
        [
            level: 50,
            skill: Skill.Teamwork.ORDER
        ]
    ];
}
export declare class Magi extends BaseDiscipline {
    name: Discipline.MAGI;
    description: 'Has a basic understanding of Magic';
    category: DisciplineCategory.ARCHETYPE;
    prerequisites: [];
    skillProgression: [];
}
export declare class MagiBlack extends BaseDiscipline {
    name: Discipline.MAGI_BLACK;
    description: 'Specialize destruction Magic';
    history: 'Harnessed from the power of Ouren';
    category: DisciplineCategory.ARCHETYPE;
    prerequisites: [Discipline.MAGI];
    skillProgression: [
        [
            level: 10,
            skill: Skill.Spell.DARKNESS
        ],
        [
            level: 25,
            skill: Skill.Spell.DESOLATE
        ]
    ];
}
export declare class MagiBlue extends BaseDiscipline {
    name: Discipline.MAGI_BLUE;
    description: 'Specialize water Magic';
    history: 'Harnessed from the power of Genki';
    category: DisciplineCategory.ARCHETYPE;
    prerequisites: [Discipline.MAGI];
    skillProgression: [
        [
            level: 10,
            skill: Skill.Basic.RAGE
        ],
        [
            level: 15,
            skill: Skill.Spell.AQUA
        ],
        [
            level: 25,
            skill: Skill.Spell.TSUMANI
        ]
    ];
}
export declare class MagiBrown extends BaseDiscipline {
    name: Discipline.MAGI_BROWN;
    description: 'Specialize rock Magic';
    history: 'Harnessed from the power of Asmin';
    category: DisciplineCategory.ARCHETYPE;
    prerequisites: [Discipline.MAGI];
    skillProgression: [
        [
            level: 10,
            skill: Skill.Spell.QUAKE
        ],
        [
            level: 15,
            skill: Skill.Spell.LANDSLIDE
        ]
    ];
}
export declare class MagiGreen extends BaseDiscipline {
    name: Discipline.MAGI_GREEN;
    description: 'Specialize time Magic';
    history: 'Harnessed from the power of Void';
    category: DisciplineCategory.ARCHETYPE;
    prerequisites: [Discipline.MAGI];
    skillProgression: [
        [
            level: 10,
            skill: Skill.Spell.STOP
        ],
        [
            level: 15,
            skill: Skill.Spell.SLOW
        ],
        [
            level: 15,
            skill: Skill.Spell.HASTE
        ]
    ];
}
export declare class MagiPink extends BaseDiscipline {
    name: Discipline.MAGI_PINK;
    description: 'Specialize charm Magic';
    history: 'Harnessed from the power of Suyri';
    category: DisciplineCategory.ARCHETYPE;
    prerequisites: [Discipline.MAGI];
    skillProgression: [
        [
            level: 10,
            skill: Skill.Spell.CHARM
        ],
        [
            level: 15,
            skill: Skill.Spell.CHILL
        ]
    ];
}
export declare class MagiPurple extends BaseDiscipline {
    name: Discipline.MAGI_PURPLE;
    description: 'Specialize ??? Magic';
    history: 'Harnessed from the power of Diag';
    category: DisciplineCategory.ARCHETYPE;
    prerequisites: [Discipline.MAGI];
    skillProgression: [[level: 10, skill: Skill.Spell.QUAKE]];
}
export declare class MagiWhite extends BaseDiscipline {
    name: Discipline.MAGI_WHITE;
    description: 'Specialize snow Magic';
    history: 'Harnessed from the power of Lawzon';
    category: DisciplineCategory.ARCHETYPE;
    prerequisites: [Discipline.MAGI];
    skillProgression: [
        [
            level: 10,
            skill: Skill.Spell.BLIZZARD
        ],
        [
            level: 10,
            skill: Skill.Spell.FROST
        ],
        [
            level: 10,
            skill: Skill.Spell.CHILL
        ]
    ];
}
export declare class MagiYellow extends BaseDiscipline {
    name: Discipline.MAGI_YELLOW;
    description: 'Specialize absorption Magic';
    history: 'Harnessed from the power of Wisp';
    category: DisciplineCategory.ARCHETYPE;
    prerequisites: [Discipline.MAGI];
    skillProgression: [
        [
            level: 10,
            skill: Skill.Spell.DRAIN
        ],
        [
            level: 25,
            skill: Skill.Spell.LEECH
        ],
        [
            level: 50,
            skill: Skill.Spell.DRAIN
        ]
    ];
}
export declare class Gaurd extends BaseDiscipline {
    name: Discipline.GAURD;
    description: 'Specialize in protection.';
    category: DisciplineCategory.ARCHETYPE;
    skillProgression: [];
}
export declare class Gaurdian extends BaseDiscipline {
    name: Discipline.GUARDIAN;
    description: 'Specialize in protection.';
    category: DisciplineCategory.ARCHETYPE;
    skillProgression: [];
}
export declare class Hero extends BaseDiscipline {
    name: Discipline.HERO;
    description: 'Specialize in saving others.';
    category: DisciplineCategory.ARCHETYPE;
    skillProgression: [];
}
export declare class Knight extends BaseDiscipline {
    name: Discipline.KNIGHT;
    description: 'A honored fighter for protects the kingdom.';
    category: DisciplineCategory.ARCHETYPE;
    skillProgression: [];
}
export declare class Mechanic extends BaseDiscipline {
    name: Discipline.MECHANIC;
    description: 'Specializes in electromechanical engineering';
    category: DisciplineCategory.ARCHETYPE;
    skillProgression: [];
}
export declare class Rouge extends BaseDiscipline {
    name: Discipline.ROUGE;
    description: 'Specializes sneak attacks and picking locks';
    category: DisciplineCategory.ARCHETYPE;
    skillProgression: [];
}
export declare class Royalty extends BaseDiscipline {
    name: Discipline.ROYALTY;
    description: 'Specializes in ruling others';
    category: DisciplineCategory.ARCHETYPE;
    skillProgression: [];
}
export declare class Rebel extends BaseDiscipline {
    name: Discipline.REBEL;
    description: 'Rebel';
    category: DisciplineCategory.ARCHETYPE;
    skillProgression: [];
}
export declare class Scout extends BaseDiscipline {
    name: Discipline.SCOUT;
    description: 'Specialize in moving ahead of the party to gathering information and reconnaissance.';
    category: DisciplineCategory.ARCHETYPE;
    skillProgression: [];
}
export declare class Solider extends BaseDiscipline {
    name: Discipline.SOLIDER;
    description: 'A solider is a follower of the United Forces. They specialize in performing strict maneuvers.';
    category: DisciplineCategory.ARCHETYPE;
    skillProgression: [[level: 10, skill: Skill.Weapon.CLEAVE]];
}
export declare class Summoner extends BaseDiscipline {
    name: Discipline.SUMMONER;
    description: 'A solider is a follower of the United Forces. They specialize in performing strict maneuvers.';
    category: DisciplineCategory.ARCHETYPE;
    skillProgression: [
        [
            level: 10,
            skill: Skill.Summon.SUMMON
        ],
        [
            level: 10,
            skill: Skill.Summon.DISMISS
        ],
        [
            level: 10,
            skill: Skill.Summon.COMMAND
        ]
    ];
}
export declare class Thief extends BaseDiscipline {
    name: Discipline.THIEF;
    description: '';
    category: DisciplineCategory.ARCHETYPE;
    skillProgression: [];
}
export declare class Warrior extends BaseDiscipline {
    name: Discipline.WARRIOR;
    description: 'Specializzes in combat on the battlefield.';
    category: DisciplineCategory.ARCHETYPE;
    skillProgression: [];
}
export declare class XSolider extends BaseDiscipline {
    name: Discipline.XSOLIDER;
    description: 'Soldiers that have gone against their teachings to gain new skills.';
    category: DisciplineCategory.ARCHETYPE;
    skillProgression: [];
}
export declare class Assassin extends BaseDiscipline {
    name: Discipline.ASSASSIN;
    description: '';
    category: DisciplineCategory.ARCHETYPE;
    skillProgression: [];
}
export declare class Healer extends BaseDiscipline {
    name: Discipline.HEALER;
    description: 'Specialize in healing.';
    category: DisciplineCategory.ARCHETYPE;
    skillProgression: [];
}
