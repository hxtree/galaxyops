import { Attribute } from '../attribute';
import { MenuSlot } from '../menu-slot';

/**
 * MovementSkill
 * actions that are directly related to movement
 */
export namespace Movement {
  export type Type = {
    name: string;
    description: string;
    consumes?: Attribute;
    menuSlot: MenuSlot;
  };

  export const WALK: Type = {
    name: 'Walk',
    description: 'Move slowly forward or backward side to side',
    // (Light press Direction Pad) Move slowly.
    menuSlot: MenuSlot.MOVEMENT,
  };

  export const RUN: Type = {
    name: 'Run',
    description: 'Move quickly using stamina',
    consumes: Attribute.SPIRIT,
    // consumes stamina
    // (walk + Square)
    // (Hard press Direction Pad with Stamina)
    menuSlot: MenuSlot.MOVEMENT,
  };

  export const SWIM: Type = {
    name: 'Swim',
    description: 'Move in deep water',
    // consumes stamina
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

  export const HIGH_JUMP: Type = {
    name: 'High Jump',
    description: 'Charged vertical jump',
    menuSlot: MenuSlot.MOVEMENT,
  };

  export const CLIMB: Type = {
    name: 'Climb',
    description: 'Scale a wall',
    menuSlot: MenuSlot.MOVEMENT,
  };

  // "83","Trek","Used to determine how steep an angled tile you can stand on.
  // If your character fails to trek the tile then they will fall from it and
  // will be to step onto it.","82",,"82"
  // Trek – Used to determine how steep an angled tile you can stand on.
  //  If your character fails to trek the tile then they will fall from it
  // and will be to step onto it.

  // Duck – (Hold Square + Backwards?) used to evaded attacks works best if preformed during attack.
  // "84","Duck","(Hold Square + Backwards?) used to evaded attacks works
  // best if preformed during attack.","83",,"83"

  // Basic – (Square) jump.
  // Jump – (Square) Jumping uses stamina and can be used to move to otherwise
  //  unreachable places. The more stamina
  // "85","Jump","(Square) Jumping uses stamina and can be used to move to
  // otherwise unreachable places. The more stamina","84",,"84"

  // High – (Stamina Boost + Square) jump straight up in the air using a stamina boost.

  // Long – (Directional Pad + Press Square) jump a long way.
  // "87","Long Jump","Jump a long way (different than running?)","86",,"86"
  // "88","Running Jump","Running while jumping","87",,"87"

  // "89","Swim","Must be learned","88",,"88"

  // "90","Dive","Take a breath and dive down based on stamina","89",,"89"

  // Fly – magic person?
}
