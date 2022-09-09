import {
  Boast,
  Cheer,
  Hope,
  Inspire,
  Scan,
  Support,
} from '../../skills/ClassSkill';
import {Appraise, PrepareFood} from '../../skills/ItemSkill';
import {Darkness, Desolate} from '../../skills/SpellSkill';
import {HeraldicLion} from '../../skills/Summon';
import {Formations, Order} from '../../skills/TeamworkSkill';

export enum DisciplineCategory {
  PROFESSION = 'Profession',
  ARCHETYPE = 'Archetype',
  // Combat Classes
  // Specialty Classes
  // Drive Classes
  // Omega Classes
  //  | Spirit Class | Drive Class | Omega Class
}

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
  COOK = 'Cook',
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
  MAGI_BLACK = 'Magi Black',
  MAGI_BLUE = 'Magi Blue',
  MAGI_BROWN = 'Magi Brown',
  MAGI_GREEN = 'Magi Green',
  MAGI_PINK = 'Magi Pink',
  MAGI_PURPLE = 'Magi Purple',
  MAGI_WHITE = 'Magi White',
  MAGI_YELLOW = 'Magi Yellow',

  // other
  WARRIOR = 'Warrior',
}

export abstract class BaseDiscipline {
  abstract name: string;
  abstract description: string;
  abstract category: DisciplineCategory;
  protected _experience: number;

  public constructor(experience: number = 0) {
    this._experience = experience;
  }

  public get level(): number {
    return Math.floor(Math.sqrt(this._experience / 100));
  }

  public get nextLevel(): number {
    return this._experience - ((this.level * (this.level - 1)) / 2) * 100;
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

export class Historian extends BaseDiscipline {
  name: Discipline.HISTORIAN;
  description: 'Studies the world as it was.';
  category: DisciplineCategory.PROFESSION;
  skillProgression: [
    [level: 10, skill: Appraise],
    [level: 25, skill: Scan],
    [level: 50, skill: HeraldicLion],
  ];
}

// may be anyone can become a cook?>
export class Cook extends BaseDiscipline {
  name: Discipline.COOK;
  description: 'Someone who prepares and cooks food';
  category: DisciplineCategory.PROFESSION;
  skillProgression: [[level: 10, skill: PrepareFood]];
  // todo prepare different food items
}

export class Cheerleader extends BaseDiscipline {
  name: Discipline.CHEERLEADER;
  description: 'Someone who cheer for their team as a form of encouragement.';
  category: DisciplineCategory.PROFESSION;
  skillProgression: [
    [level: 1, skill: Cheer],
    [level: 10, skill: Support],
    [level: 40, skill: Inspire],
    [level: 50, skill: Hope],
  ];
}

export class Commander extends BaseDiscipline {
  name: Discipline.COMMANDER;
  description: 'Specialize in giving orders to others.';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [
    [level: 1, skill: Boast],
    [level: 10, skill: Formations],
    [level: 50, skill: Order],
  ];
}

export class MagiBlack extends BaseDiscipline {
  name: Discipline.MAGI_BLACK;
  description: 'Specialize destruction Magic';
  history: 'Harnessed from the power of Ouren';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [
    [level: 10, skill: Darkness],
    [level: 25, skill: Desolate],
  ];
}

// Magi Blue - Water – (Harnessed from the power of Genki) –
// Actions: Rage, Tsunami, ,
// Magi Brown - Rock – (Harnessed from the power of Asmin) –
// Actions: Quake, , ,
// Magi Green - Time– (Harnessed from the power of Void) –
// Actions: Stop, Slow, Haste,
// Magi Pink - Charm – (Harnessed from the power of Suyri) –
// Actions: Charm, , Chill,
// Magi Purple -  – (Harnessed from the power of Diag) –
// Actions: Quake, , ,
// Magi White - Snow – (Harnessed from the power of Lawzon) –
// Actions: Blizzard, Frost, Chill,
// Magi Yellow – Absorption / Leech – (Harnessed from the power of Wisp) –
// Actions: Absorb, Drain, ,
