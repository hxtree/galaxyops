import {StatusEffect} from '../component/status.effect';
import {Drive, Life, Spirit} from '../component/gauges';
import {Stats} from '../component/stats';
import {Effect, Operator, Trait} from '../component/trait';
import {Token} from '../component/token.gear';
import {
  Assassin,
  BaseDiscipline,
  Cheerleader,
  Commander,
  Cook,
  Gaurd,
  Healer,
  Hero,
  Historian,
  Knight,
  Magi,
  MagiBlack,
  MagiBlue,
  MagiBrown,
  MagiGreen,
  MagiPink,
  MagiPurple,
  MagiWhite,
  MagiYellow,
  Mechanic,
  Rouge,
  Royalty,
  Scout,
  Solider,
  Summoner,
  Thief,
  Warrior,
  XSolider,
} from '../component/discipline';
import {
  OfficersUniform,
  Outfit,
  TShirtAndJeans,
} from '../component/outfit.gear';
import {GearSlot} from '../component/gear';
import {IArchetype} from './archetype.interface';
import {EffectTag} from '../component/tag.effect';

/**
 * A character that can be played
 * values are relative to player instance
 */
export interface PlayerCharacter extends IArchetype {
  firstName: string;
  lastName: string;
  backstory: string;
  experience?: number;

  // these seem more like they loaded or determined for player characters
  life?: Life;
  drive?: Drive;
  spirit?: Spirit;
  stats?: Stats;

  traits?: Trait[];
  statusEffects?: StatusEffect[];
  token?: Token;
  potentialDisciplines?: Array<BaseDiscipline>;
  potentialOutfits?: Array<Outfit>;
  potentialGeatSlots?: Array<GearSlot>;
}

export class ArinothDiyath implements PlayerCharacter {
  firstName: 'Arinoth';
  lastName: 'Diyath';
  backstory: '';
  potentialDisciplines: [];
}

export class FayeImago implements PlayerCharacter {
  firstName: 'Faye';
  lastName: 'Imago';
  backstory: 'A young girl who weilds magic and studies history';
  potentialDisciplines: [
    // Wizard,
    Historian,
    Magi,
    MagiBlack,
    MagiBlue,
    MagiBrown,
    MagiGreen,
    MagiPink,
    MagiPurple,
    MagiWhite,
    MagiYellow,
  ];
}

export class GaaliRuin implements PlayerCharacter {
  firstName: 'Gaali';
  lastName: 'Ruin';
  backstory: 'A prince with little interest in becoming king. Instead, he lives for testing his sword in raw danger.';
  potentialDisciplines: [
    // Bard,
    // Duelist,
    Knight,
    // RuneKing,
    Royalty,
    // - Nobel
    // - Duke
    // - King
    // Hero
    // King
    Warrior,
  ];
  traits: [
    {
      // innate prociency with sword
      tag: EffectTag.SWORD;
      modifier: Effect.RESIST;
      quantity: 0.5;
      operator: Operator.DIVIDE;
    },
  ];
}

export class GunterStonewell implements PlayerCharacter {
  firstName: 'Gunter';
  lastName: 'Stonewell';
  backstory: 'A solider for life';
  potentialDisciplines: [
    Gaurd,
    //  BodyBuilder,
    Commander,
  ];
}

export class LoomeeAngora implements PlayerCharacter {
  firstName: 'Loomee';
  lastName: 'Angora';
  backstory: 'A girl created when the Song Maiden left her post to become human.';
  symbolizes: 'The Keeper of Heart';
  affiliation: ['The Keeper'];
  potentialDisciplines: [
    Cheerleader,
    // Maiden,
    // Keeper,
    Cook,
    Healer,
    // Sage,
    // Guardian' // omega class
  ];
}

/**
 * Malace
 */
export class MalaceTsia implements PlayerCharacter {
  firstName: 'Malace';
  lastName: 'Tsia';
  backstory: 'was used as a scarifice for his people to hold demons by sewing them to his skin';
  potentialDisciplines: [
    // Gymnast,
    // Possessed,
    Scout,
    // Ouroboros,
    Summoner,
    Rouge,
  ];
  traits: [
    {
      // Can single handedly carry party through foes of darkness due to his darkness healing trait.
      tag: EffectTag.DARKNESS;
      modifier: Effect.HEAL;
      percent: 80;
    },
  ];
  potentialOutfits: [OfficersUniform];
}

export class MeekuOni implements PlayerCharacter {
  firstName: 'Meeku';
  lastName: 'Oni';
  backstory: '';
  potentialDisciplines: [
    Solider,
    XSolider,
    // Berserker,
    // Oni,
    Hero,
  ];
  traits: [
    {
      // learns quickly
      tag: EffectTag.EXPERIENCE;
      modifier: Effect.WEAK;
      quantity: 1.2;
      operator: Operator.MULTIPLY;
    },
  ];
  potentialOutfits: [TShirtAndJeans];
}

export class PennyK1ibbutz implements PlayerCharacter {
  firstName: 'Penny';
  lastName: 'Kibbutz';
  backstory: '';
  potentialDisciplines: [
    // Ninja,
    Assassin,
    // AmberAssassin,
    // EliteAssasin,
    Thief,
  ];
  traits: [
    {
      // has built up tolerance to poisons
      tag: EffectTag.POISON;
      modifier: Effect.IMMUNE;
    },
  ];
}

export class TraezUthsha implements PlayerCharacter {
  firstName: 'Traez';
  lastName: 'Uthsha';
  backstory: '';
  potentialDisciplines: [
    // Engineer,
    Mechanic,
    // LighteningWarrior,
    // Rebel,
  ];
}
