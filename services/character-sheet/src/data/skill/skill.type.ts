import { MenuSlotType } from '../menu-slot';
import { ActionEffects, EffectRecord, EffectTable } from '../table.effect';
import { Button, ButtonCombo } from '../buttons';
import { Attribute } from '../attribute';
import { AreaOfEffect } from '../area-of-effect';

/**
 * Represents proficiency levels for active and passive skills, determining their effectiveness.
 */
export enum SkillLevel {
  LV1 = 'LV1',
  LV2 = 'LV2',
  LV3 = 'LV3',
  LV4 = 'LV4',
  LV5 = 'LV5',
  LV6 = 'LV6',
  LV7 = 'LV7',
  LV8 = 'LV8',
  LV9 = 'LV9',
  MAX = 'MAX',
}

export enum ObjectCategory {
  MOVEABLE = 'Moveable',
  IMPENDING = 'Impending',
  LOCKED = 'Locked',
}

// TODO : format skills as "Slash Lv.1" on frontend
export type SkillType = {
  name: string;
  description: string;
  targets?: number;
  effect?: EffectTable;
  backstory?: string;
  commands?: string[]; // must be invoked by summoner through Command
  consumes?: Attribute; // TODO UOM present but missing quantity and time
  buttonCombos?: ButtonCombo[];
  target?: ObjectCategory;
  actionEffects?: ActionEffects;
  menuSlot: MenuSlotType;

  /**
   * Whether the skill must be canceled or automatically stop being performed
   */
  fixed?: boolean;

  /**
   * Stamina Boost Enabled Action
   * By holding down the button used to make that move
   * a player may place more stamina into the move
   * making it a more powerful action.
   * For every 6 seconds, character gains a plus 1 for example.
   */
  booster?: Attribute;

  /**
   * Cost is the resource expenditure that must be given up by the actor to
   * perform the action. By holding button longer additional cost can be
   * consumed for some skills.
   */
  cost?: EffectRecord[];

  conditions?: string;
  areaOfEffect?: AreaOfEffect.Type;
};
