import { MenuSlot } from '../menu-slot';
import { SkillType, SkillLevel } from './skill.type';
import { GameContext } from '../game-context';
import { Button } from '../buttons';
import { Attribute } from '../attribute';
import { ActionTarget } from '../action-target';

/**
 * actions that are exclusively movements
 */
export namespace Movement {
  export const WALK_LV1: SkillType = {
    buttonCombos: [
      {
        context: GameContext.TERRAIN,
        simultaneous: [Button.UP],
        timingWindowMs: 300,
      },
      {
        context: GameContext.TERRAIN,
        simultaneous: [Button.RIGHT],
        timingWindowMs: 300,
      },
      {
        context: GameContext.TERRAIN,
        simultaneous: [Button.DOWN],
        timingWindowMs: 300,
      },
      {
        context: GameContext.TERRAIN,
        simultaneous: [Button.LEFT],
        timingWindowMs: 300,
      },
    ],
    description: 'Move slowly forward or backward side to side',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MOVEMENT,
    name: 'Walk',
    target: ActionTarget.SELF,
  };

  export const RUN_LV1: SkillType = {
    buttonCombos: [
      {
        context: GameContext.TERRAIN,
        simultaneous: [Button.UP, Button.ACTION],
        timingWindowMs: 300,
      },
      {
        context: GameContext.TERRAIN,
        simultaneous: [Button.RIGHT, Button.ACTION],
        timingWindowMs: 300,
      },
      {
        context: GameContext.TERRAIN,
        simultaneous: [Button.DOWN, Button.ACTION],
        timingWindowMs: 300,
      },
      {
        context: GameContext.TERRAIN,
        simultaneous: [Button.LEFT, Button.ACTION],
        timingWindowMs: 300,
      },
    ],
    cost: [
      {
        chance: 1,
        quantity: '1',
        remove: Attribute.SPIRIT,
      },
    ],
    description: 'Move quickly using stamina',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MOVEMENT,
    name: 'Run',
    target: ActionTarget.SELF,
  };

  // party members should have to learn
  export const SWIM_LV1: SkillType = {
    buttonCombos: [
      {
        context: GameContext.WATER,
        simultaneous: [Button.UP],
        timingWindowMs: 300,
      },
      {
        context: GameContext.WATER,
        simultaneous: [Button.RIGHT],
        timingWindowMs: 300,
      },
      {
        context: GameContext.WATER,
        simultaneous: [Button.DOWN],
        timingWindowMs: 300,
      },
      {
        context: GameContext.WATER,
        simultaneous: [Button.LEFT],
        timingWindowMs: 300,
      },
    ],
    cost: [
      {
        chance: 1,
        quantity: '3',
        remove: Attribute.SPIRIT,
      },
    ],
    description: 'Move in deep water',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MOVEMENT,
    name: 'Swim',
    target: ActionTarget.SELF,
  };

  export const SWIM_FAST_LV1: SkillType = {
    buttonCombos: [
      {
        context: GameContext.WATER,
        simultaneous: [Button.UP, Button.ACTION],
        timingWindowMs: 300,
      },
      {
        context: GameContext.WATER,
        simultaneous: [Button.RIGHT, Button.ACTION],
        timingWindowMs: 300,
      },
      {
        context: GameContext.WATER,
        simultaneous: [Button.DOWN, Button.ACTION],
        timingWindowMs: 300,
      },
      {
        context: GameContext.WATER,
        simultaneous: [Button.LEFT, Button.ACTION],
        timingWindowMs: 300,
      },
    ],
    cost: [
      {
        chance: 1,
        quantity: '3',
        remove: Attribute.SPIRIT,
      },
    ],
    description: 'Move fast in deep water',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MOVEMENT,
    name: 'Swim Fast',
    target: ActionTarget.SELF,
  };

  export const BACK_FLIP_LV1: SkillType = {
    buttonCombos: [
      {
        context: GameContext.TERRAIN,
        inOrder: [Button.UP, Button.DOWN, Button.JUMP],
        timingWindowMs: 300,
      },
      {
        context: GameContext.TERRAIN,
        inOrder: [Button.RIGHT, Button.LEFT, Button.JUMP],
        timingWindowMs: 300,
      },
      {
        context: GameContext.TERRAIN,
        inOrder: [Button.DOWN, Button.UP, Button.JUMP],
        timingWindowMs: 300,
      },
      {
        context: GameContext.TERRAIN,
        inOrder: [Button.LEFT, Button.RIGHT, Button.JUMP],
        timingWindowMs: 300,
      },
    ],
    cost: [
      {
        chance: 1,
        quantity: '5',
        remove: Attribute.SPIRIT,
      },
    ],
    description: 'Quickly move backwards',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MOVEMENT,
    name: 'Back Flip',
    target: ActionTarget.SELF,
  };

  export const DOUBLE_BACK_FLIP_LV1: SkillType = {
    buttonCombos: [
      {
        context: GameContext.TERRAIN,
        inOrder: [Button.UP, Button.DOWN, Button.JUMP, Button.JUMP],
        timingWindowMs: 300,
      },
      {
        context: GameContext.TERRAIN,
        inOrder: [Button.RIGHT, Button.LEFT, Button.JUMP, Button.JUMP],
        timingWindowMs: 300,
      },
      {
        context: GameContext.TERRAIN,
        inOrder: [Button.DOWN, Button.UP, Button.JUMP, Button.JUMP],
        timingWindowMs: 300,
      },
      {
        context: GameContext.TERRAIN,
        inOrder: [Button.LEFT, Button.RIGHT, Button.JUMP, Button.JUMP],
        timingWindowMs: 300,
      },
    ],
    cost: [
      {
        chance: 1,
        quantity: '5',
        remove: Attribute.SPIRIT,
      },
    ],
    description: 'Quickly move backwards twice',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MOVEMENT,
    name: 'Double Back Flip',
    target: ActionTarget.SELF,
  };

  export const JUMP_LV1: SkillType = {
    buttonCombos: [
      {
        context: GameContext.TERRAIN,
        inOrder: [Button.JUMP],
        timingWindowMs: 300,
      },
      {
        context: GameContext.TERRAIN,
        inOrder: [Button.JUMP],
        timingWindowMs: 300,
      },
      {
        context: GameContext.TERRAIN,
        inOrder: [Button.JUMP],
        timingWindowMs: 300,
      },
      {
        context: GameContext.TERRAIN,
        inOrder: [Button.JUMP],
        timingWindowMs: 300,
      },
    ],
    cost: [
      {
        chance: 1,
        quantity: '1',
        remove: Attribute.SPIRIT,
      },
    ],
    description:
      'Use stamina to move vertically and reach otherwise unreachable places',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MOVEMENT,
    name: 'Jump',
    target: ActionTarget.SELF,
  };

  // Long – (Directional Pad + Press Square) jump a long way.
  // "87","Long Jump","Jump a long way (different than running?)","86",,"86"
  // "88","Running Jump","Running while jumping","87",,"87"

  export const HIGH_JUMP_LV1: SkillType = {
    buttonCombos: [
      {
        context: GameContext.TERRAIN,
        inOrder: [Button.JUMP, Button.JUMP],
        timingWindowMs: 300,
      },
      {
        context: GameContext.TERRAIN,
        inOrder: [Button.JUMP, Button.JUMP],
        timingWindowMs: 300,
      },
      {
        context: GameContext.TERRAIN,
        inOrder: [Button.JUMP, Button.JUMP],
        timingWindowMs: 300,
      },
      {
        context: GameContext.TERRAIN,
        inOrder: [Button.JUMP, Button.JUMP],
        timingWindowMs: 300,
      },
    ],
    // jump straight up in the air using a stamina boost.
    cost: [
      {
        chance: 1,
        quantity: '4',
        remove: Attribute.SPIRIT,
      },
    ],

    description: 'Charged vertical jump',

    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MOVEMENT,
    name: 'High Jump',
    target: ActionTarget.SELF,
  };

  export const CLIMB_LV1: SkillType = {
    description: 'Scale a wall',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MOVEMENT,
    name: 'Climb',
    target: ActionTarget.SELF,
  };

  export const TREK_LV1: SkillType = {
    description:
      'Walk up steep hill without falling down. '
      + 'Used to determine how steep an angled tile you can stand on. '
      + 'If your character fails to trek the tile then they will fall from it and will be to step onto it. ',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MOVEMENT,
    name: 'Trek',
    target: ActionTarget.SELF,
  };

  // Duck – (Hold Square + Backwards?) used to evaded attacks works best if preformed during attack.
  // "84","Duck","(Hold Square + Backwards?) used to evaded attacks works
  // best if preformed during attack.","83",,"83"

  // "90","Dive","Take a breath and dive down based on stamina","89",,"89"

  // Fly – magic person?
}
