import { Affiliation } from './affiliation';
import { Life, Drive, Spirit } from './gauges';
import { Stats } from './stats';
import { Trait } from './trait';
import { Slot } from './slot';
import { Skill } from './skill';
import { WeaponCategory } from './weapon';
import { Discipline } from './discipline';
import { Outfit } from './outfit';
import { SupplyInventory } from './supply-inventory';

export type Archetype = {
  id?: string;
  name: string;
  surname?: string;
  age?: number;
  height?: string;
  weight?: number;
  gender?: string;
  element?: string;
  occupation?: string;
  characteristics?: string;
  description?: string;
  history?: string;
  backstory?: string;
  experience?: number;
  alias?: string[];
  symbolizes?: string[];

  biological?: {
    race?: string;
    gender?: string;
    age?: string;
    height?: string;
    weight?: string;
    hairColor: string;
    eyeColor: string;
  };

  relationships?: string[];
  affiliation?: Affiliation[];

  // these seem more like they loaded or determined for player characters
  life?: Life;
  drive?: Drive;
  spirit?: Spirit;
  stats?: Stats;
  traits?: Trait[];
  gearSlots?: Slot[];
  supplies?: SupplyInventory[];

  potentialDisciplines?: Discipline[];
  potentialOutfits?: Outfit[];
  summonCompatibility?: Skill[];
  weaponCompatibility?: WeaponCategory[];

  // compatibility [
  // disciplines?: Discipline[];
  // outfits?: Outfit[];
  // gearSlots?: GearSlot[];
  // summon?: Summon[];
  // ]

  // loot?: Gear.Item[];
};
