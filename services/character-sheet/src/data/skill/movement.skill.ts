import { MenuSlot } from '../menu-slot';
import { SkillType } from '.';
import { GameContext } from '../game-context';
import { Button } from '../buttons';
import { Attribute } from '../attribute';
import { ActionTarget } from '../action-target';

/**
 * actions that are exclusively movements
 */
export namespace Movement {
  export const WALK: SkillType = {
    name: 'Walk',
    target: ActionTarget.SELF,
    description: 'Move slowly forward or backward side to side',
    buttonCombos: [
      {
        simultaneous: [Button.UP],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
      {
        simultaneous: [Button.RIGHT],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
      {
        simultaneous: [Button.DOWN],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
      {
        simultaneous: [Button.LEFT],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
    ],
    menuSlot: MenuSlot.MOVEMENT,
  };

  export const RUN: SkillType = {
    name: 'Run',
    target: ActionTarget.SELF,
    description: 'Move quickly using stamina',
    cost: [
      {
        remove: Attribute.SPIRIT,
        quantity: '1',
        chance: 1,
      },
    ],
    buttonCombos: [
      {
        simultaneous: [Button.UP, Button.ACTION],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
      {
        simultaneous: [Button.RIGHT, Button.ACTION],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
      {
        simultaneous: [Button.DOWN, Button.ACTION],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
      {
        simultaneous: [Button.LEFT, Button.ACTION],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
    ],
    menuSlot: MenuSlot.MOVEMENT,
  };

  // party members should have to learn
  export const SWIM: SkillType = {
    name: 'Swim',
    target: ActionTarget.SELF,
    description: 'Move in deep water',
    cost: [
      {
        remove: Attribute.SPIRIT,
        quantity: '3',
        chance: 1,
      },
    ],
    buttonCombos: [
      {
        simultaneous: [Button.UP],
        timingWindowMs: 300,
        context: GameContext.WATER,
      },
      {
        simultaneous: [Button.RIGHT],
        timingWindowMs: 300,
        context: GameContext.WATER,
      },
      {
        simultaneous: [Button.DOWN],
        timingWindowMs: 300,
        context: GameContext.WATER,
      },
      {
        simultaneous: [Button.LEFT],
        timingWindowMs: 300,
        context: GameContext.WATER,
      },
    ],
    menuSlot: MenuSlot.MOVEMENT,
  };

  export const SWIM_FAST: SkillType = {
    name: 'Swim Fast',
    target: ActionTarget.SELF,
    description: 'Move fast in deep water',
    cost: [
      {
        remove: Attribute.SPIRIT,
        quantity: '3',
        chance: 1,
      },
    ],
    buttonCombos: [
      {
        simultaneous: [Button.UP, Button.ACTION],
        timingWindowMs: 300,
        context: GameContext.WATER,
      },
      {
        simultaneous: [Button.RIGHT, Button.ACTION],
        timingWindowMs: 300,
        context: GameContext.WATER,
      },
      {
        simultaneous: [Button.DOWN, Button.ACTION],
        timingWindowMs: 300,
        context: GameContext.WATER,
      },
      {
        simultaneous: [Button.LEFT, Button.ACTION],
        timingWindowMs: 300,
        context: GameContext.WATER,
      },
    ],
    menuSlot: MenuSlot.MOVEMENT,
  };

  export const BACK_FLIP: SkillType = {
    name: 'Back Flip',
    target: ActionTarget.SELF,
    description: 'Quickly move backwards',
    cost: [
      {
        remove: Attribute.SPIRIT,
        quantity: '5',
        chance: 1,
      },
    ],
    menuSlot: MenuSlot.MOVEMENT,
    buttonCombos: [
      {
        inOrder: [Button.UP, Button.DOWN, Button.JUMP],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
      {
        inOrder: [Button.RIGHT, Button.LEFT, Button.JUMP],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
      {
        inOrder: [Button.DOWN, Button.UP, Button.JUMP],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
      {
        inOrder: [Button.LEFT, Button.RIGHT, Button.JUMP],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
    ],
  };

  export const DOUBLE_BACK_FLIP: SkillType = {
    name: 'Double Back Flip',
    target: ActionTarget.SELF,
    description: 'Quickly move backwards twice',
    cost: [
      {
        remove: Attribute.SPIRIT,
        quantity: '5',
        chance: 1,
      },
    ],
    menuSlot: MenuSlot.MOVEMENT,
    buttonCombos: [
      {
        inOrder: [Button.UP, Button.DOWN, Button.JUMP, Button.JUMP],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
      {
        inOrder: [Button.RIGHT, Button.LEFT, Button.JUMP, Button.JUMP],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
      {
        inOrder: [Button.DOWN, Button.UP, Button.JUMP, Button.JUMP],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
      {
        inOrder: [Button.LEFT, Button.RIGHT, Button.JUMP, Button.JUMP],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
    ],
  };

  export const JUMP: SkillType = {
    name: 'Jump',
    target: ActionTarget.SELF,
    description:
      'Use stamina to move vertically and reach otherwise unreachable places',
    cost: [
      {
        remove: Attribute.SPIRIT,
        quantity: '1',
        chance: 1,
      },
    ],
    buttonCombos: [
      {
        inOrder: [Button.JUMP],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
      {
        inOrder: [Button.JUMP],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
      {
        inOrder: [Button.JUMP],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
      {
        inOrder: [Button.JUMP],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
    ],
    menuSlot: MenuSlot.MOVEMENT,
  };

  // Long – (Directional Pad + Press Square) jump a long way.
  // "87","Long Jump","Jump a long way (different than running?)","86",,"86"
  // "88","Running Jump","Running while jumping","87",,"87"

  export const HIGH_JUMP: SkillType = {
    name: 'High Jump',
    target: ActionTarget.SELF,
    description: 'Charged vertical jump', // jump straight up in the air using a stamina boost.
    cost: [
      {
        remove: Attribute.SPIRIT,
        quantity: '4',
        chance: 1,
      },
    ],
    buttonCombos: [
      {
        inOrder: [Button.JUMP, Button.JUMP],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
      {
        inOrder: [Button.JUMP, Button.JUMP],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
      {
        inOrder: [Button.JUMP, Button.JUMP],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
      {
        inOrder: [Button.JUMP, Button.JUMP],
        timingWindowMs: 300,
        context: GameContext.TERRAIN,
      },
    ],
    menuSlot: MenuSlot.MOVEMENT,
  };

  export const CLIMB: SkillType = {
    name: 'Climb',
    target: ActionTarget.SELF,
    description: 'Scale a wall',
    menuSlot: MenuSlot.MOVEMENT,
  };

  export const TREK: SkillType = {
    name: 'Trek',
    target: ActionTarget.SELF,
    description:
      'Walk up steep hill without falling down. '
      + 'Used to determine how steep an angled tile you can stand on. '
      + 'If your character fails to trek the tile then they will fall from it and will be to step onto it. ',
    menuSlot: MenuSlot.MOVEMENT,
  };

  // Duck – (Hold Square + Backwards?) used to evaded attacks works best if preformed during attack.
  // "84","Duck","(Hold Square + Backwards?) used to evaded attacks works
  // best if preformed during attack.","83",,"83"

  // "90","Dive","Take a breath and dive down based on stamina","89",,"89"

  // Fly – magic person?
}
