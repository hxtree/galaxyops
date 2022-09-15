import {
  Boast,
  Cheer,
  Hope,
  Inspire,
  Rage,
  Scan,
  Support,
} from '../skill/ClassSkill';
import {Appraise, PrepareFood} from '../skill/ItemSkill';
import {
  Aqua,
  Blizzard,
  Charm,
  Chill,
  Darkness,
  Desolate,
  Drain,
  Frost,
  Haste,
  Landslide,
  Leech,
  Quake,
  Slow,
  Stop,
  Tsunami,
} from '../skill/SpellSkill';
import {HeraldicLion} from '../skill/SummonSkill';
import {Formations, Order} from '../skill/TeamworkSkill';

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

export class MagiBlue extends BaseDiscipline {
  name: Discipline.MAGI_BLUE;
  description: 'Specialize water Magic';
  history: 'Harnessed from the power of Genki';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [
    [level: 10, skill: Rage],
    [level: 15, skill: Aqua],
    [level: 25, skill: Tsunami],
  ];
}

export class MagiBrown extends BaseDiscipline {
  name: Discipline.MAGI_BROWN;
  description: 'Specialize rock Magic';
  history: 'Harnessed from the power of Asmin';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [[level: 10, skill: Quake], [level: 15, skill: Landslide]];
}

export class MagiGreen extends BaseDiscipline {
  name: Discipline.MAGI_GREEN;
  description: 'Specialize time Magic';
  history: 'Harnessed from the power of Void';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [
    [level: 10, skill: Stop],
    [level: 15, skill: Slow],
    [level: 15, skill: Haste],
  ];
}

export class MagiPink extends BaseDiscipline {
  name: Discipline.MAGI_PINK;
  description: 'Specialize charm Magic';
  history: 'Harnessed from the power of Suyri';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [[level: 10, skill: Charm], [level: 15, skill: Chill]];
}

export class MagiPurple extends BaseDiscipline {
  name: Discipline.MAGI_PURPLE;
  description: 'Specialize ??? Magic';
  history: 'Harnessed from the power of Diag';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [[level: 10, skill: Quake]]; // ?? is quake correct
}

export class MagiWhite extends BaseDiscipline {
  name: Discipline.MAGI_WHITE;
  description: 'Specialize snow Magic';
  history: 'Harnessed from the power of Lawzon';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [
    [level: 10, skill: Blizzard],
    [level: 10, skill: Frost],
    [level: 10, skill: Chill],
  ];
}

export class MagiYellow extends BaseDiscipline {
  name: Discipline.MAGI_YELLOW;
  description: 'Specialize absorption Magic';
  history: 'Harnessed from the power of Wisp';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [
    [level: 10, skill: Drain],
    [level: 25, skill: Leech],
    [level: 50, skill: Drain],
  ];
}

export class Gaurd extends BaseDiscipline {
  name: Discipline.GAURD;
  description: 'Specialize in protection.';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [];
}

export class Gaurdian extends BaseDiscipline {
  name: Discipline.GAURD;
  description: 'Specialize in protection.';
  category: DisciplineCategory.ARCHETYPE;
  skillProgression: [];
}
