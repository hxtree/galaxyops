import { MenuSlot } from '../menu-slot';
import { SkillType } from '.';
import { GameContext } from '../game-context';
import { Button } from '../buttons';
import { Attribute } from '../attribute';

/**
 * actions that are exclusively movements
 */
export namespace Movement {
  export const WALK: SkillType = {
    name: 'Walk',
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
    description: 'Move quickly using stamina',
    consumes: Attribute.SPIRIT,
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
    description: 'Move in deep water',
    consumes: Attribute.SPIRIT,
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
    description: 'Move fast in deep water',
    consumes: Attribute.SPIRIT,
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
    description: 'Quickly move backwards',
    consumes: Attribute.SPIRIT,
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
    description: 'Quickly move backwards twice',
    consumes: Attribute.SPIRIT,
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
    description:
      'Use stamina to move vertically and reach otherwise unreachable places',
    consumes: Attribute.SPIRIT,
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
    description: 'Charged vertical jump', // jump straight up in the air using a stamina boost.
    consumes: Attribute.SPIRIT,
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
    description: 'Scale a wall',
    menuSlot: MenuSlot.MOVEMENT,
  };

  export const TREK: SkillType = {
    name: 'Trek',
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
