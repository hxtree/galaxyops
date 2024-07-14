import { Drive } from './drive.skill';
import { Item } from './item.skill';
import { Spell } from './spell.skill';
import { Tool } from './tool.skill';
import { Weapon } from './weapon.skill';
import { Movement } from './movement.skill';
import { Passive } from './passive.skill';
import { Teamwork } from './teamwork.skill';
import { Summon } from './summon.skill';
import { Trap } from './trap.skill';
import { Basic } from './basic.skill';
import { Interaction } from './interaction.skill';

export const Skills = {
  ...Drive,
  ...Item,
  ...Spell,
  ...Tool,
  ...Weapon,
  ...Movement,
  ...Passive,
  ...Teamwork,
  ...Summon,
  ...Trap,
  ...Basic,
  ...Interaction,
};
