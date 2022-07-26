export enum Attribute {
    EXPERIENCE = 'Experience',
    LIFE = "Life",
    SPIRIT = "Spirit",
    DRIVE = 'Drive',
    POWER = 'Power',
    SPEED = 'Speed',
    WISDOM = 'Wisdom',
    INTELLIGENCE = 'Intelligence',
    DEFENSE = 'Defense',
    ACCURACY = 'Accuracy',
    EVASION = 'Evasion',
    LUCK = 'Luck'
}

// stat bonus are computed at runtime
export class Life {
    current: number;
    max: number;
}

// stat bonus are computed at runtime
export class Drive {
    current: number;
    max: number;
}

// stat bonus are computed at runtime
export class Spirit {
    current: number;
    max: number;
}

export class Stats {
    // The ability to apply force to ones movements
    power: number;

    // The ability to move quickly
    speed: number;   

    // The quality of having experience, knowledge, and good judgment.
    wisdom: number;

    // The ability to think and reason logically.
    intelligence: number;
 
    // The ability to protect and defend oneself.
    defense: number;
 
    // The ability to hit and injure others.
    accuracy: number;
 
    // The ability to avoid and evade attacks.
    evasion: number;
 
    // The ability to have a favorable outcome.
    luck: number;
}