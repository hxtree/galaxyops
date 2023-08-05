import { Attribute } from '../attribute';
import { Button, ButtonCombo } from '../buttons';
import { MenuSlot } from '../menu-slot';

/**
 * actions that are exclusively movements
 */
export namespace Movement {
  export type Type = {
    name: string;
    description: string;
    consumes?: Attribute;
    buttonCombos?: ButtonCombo[];
    menuSlot: MenuSlot;
  };

  export const WALK: Type = {
    name: 'Walk',
    description: 'Move slowly forward or backward side to side',
    // buttonCombos: [[Button.UP], [Button.RIGHT], [Button.DOWN], [Button.LEFT]],
    menuSlot: MenuSlot.MOVEMENT,
  };

  export const RUN: Type = {
    name: 'Run',
    description: 'Move quickly using stamina',
    consumes: Attribute.SPIRIT,
    // consumes stamina
    // direction plus square
    menuSlot: MenuSlot.MOVEMENT,
  };

  export const SWIM: Type = {
    name: 'Swim',
    description: 'Move in deep water',
    // consumes stamina
    // Must be learned
    menuSlot: MenuSlot.MOVEMENT,
  };

  export const SWIM_FAST: Type = {
    name: 'Swim Fast',
    description: 'Move in deep water fast',
    // consumes more stamina
    menuSlot: MenuSlot.MOVEMENT,
  };

  export const BACK_FLIP: Type = {
    name: 'Back Flip',
    description: 'Quickly move backwards',
    menuSlot: MenuSlot.MOVEMENT,
  };

  export const DOUBLE_BACK_FLIP: Type = {
    name: 'Double Back Flip',
    description: 'Quickly move backwards twice',
    menuSlot: MenuSlot.MOVEMENT,
  };

  export const JUMP: Type = {
    name: 'Jump',
    description:
      'Use stamina to move vertically and reach otherwise unreachable places',
    // jump straight up in the air using a stamina boost.
    // Square
    menuSlot: MenuSlot.MOVEMENT,
  };

  // Long – (Directional Pad + Press Square) jump a long way.
  // "87","Long Jump","Jump a long way (different than running?)","86",,"86"
  // "88","Running Jump","Running while jumping","87",,"87"

  export const HIGH_JUMP: Type = {
    name: 'High Jump',
    description: 'Charged vertical jump', // jump straight up in the air using a stamina boost.
    // High – (Stamina Boost + Square)
    menuSlot: MenuSlot.MOVEMENT,
  };

  export const CLIMB: Type = {
    name: 'Climb',
    description: 'Scale a wall',
    menuSlot: MenuSlot.MOVEMENT,
  };

  export const TREK: Type = {
    name: 'Trek',
    description:
      'Walk up steep hill without falling down. ' +
      'Used to determine how steep an angled tile you can stand on. ' +
      'If your character fails to trek the tile then they will fall from it and will be to step onto it. ',
    menuSlot: MenuSlot.MOVEMENT,
  };

  // Duck – (Hold Square + Backwards?) used to evaded attacks works best if preformed during attack.
  // "84","Duck","(Hold Square + Backwards?) used to evaded attacks works
  // best if preformed during attack.","83",,"83"

  // "90","Dive","Take a breath and dive down based on stamina","89",,"89"

  // Fly – magic person?
}
