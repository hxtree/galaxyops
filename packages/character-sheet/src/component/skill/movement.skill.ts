import {Attribute} from '../attribute';

/**
 * MovementSkill
 * actions that are directly related to movement
 */
export enum Movement {
  WALK = 'Walk',
  RUN = 'Run',
  SWIM = 'Swim',
  BACK_FLIP = 'Back Flip',
  DOUBLE_BACK_FLIP = 'Double Back Flip',
  HIGH_JUMP = 'High Jump',
  CLIMB = 'Climb',
}

export namespace MovementSkill {
  export type MovementType = {
    name: string;
    description: string;
    consumes?: Attribute;
  };

  export const Walk: MovementType = {
    name: Movement.WALK,
    description: 'Move slowly forward or backward side to side',
    // (Light press Direction Pad) Move slowly.
  };

  export const Run: MovementType = {
    name: Movement.RUN,
    description: 'Move quickly using stamina',
    consumes: Attribute.SPIRIT,
    // consumes stanmina
    // (walk + Square)
    // (Hard press Direction Pad with Stamina)
  };

  export const Swim: MovementType = {
    name: Movement.SWIM,
    description: 'Move in deep water',
    // consumes stanmina
  };

  export const BackFlip: MovementType = {
    name: Movement.BACK_FLIP,
    description: 'Quickly move backwards',
  };

  export const DoubleBackFlip: MovementType = {
    name: Movement.DOUBLE_BACK_FLIP,
    description: 'Quickly move backwards twice',
  };

  export const HighJump: MovementType = {
    name: Movement.HIGH_JUMP,
    description: 'Charged vertical jump',
  };

  export const Climb: MovementType = {
    name: Movement.CLIMB,
    description: 'Scale a wall',
  };

  // "83","Trek","Used to determine how steep an angled tile you can stand on. If your character fails to trek the tile then they will fall from it and will be to step onto it.","82",,"82"
  // Trek – Used to determine how steep an angled tile you can stand on. If your character fails to trek the tile then they will fall from it and will be to step onto it.

  // Duck – (Hold Square + Backwards?) used to evaded attacks works best if preformed during attack.
  // "84","Duck","(Hold Square + Backwards?) used to evaded attacks works best if preformed during attack.","83",,"83"

  // Basic – (Square) jump.
  // Jump – (Square) Jumping uses stamina and can be used to move to otherwise unreachable places. The more stamina
  // "85","Jump","(Square) Jumping uses stamina and can be used to move to otherwise unreachable places. The more stamina","84",,"84"

  // High – (Stamina Boost + Square) jump straight up in the air using a stamina boost.

  // Long – (Directional Pad + Press Square) jump a long way.
  // "87","Long Jump","Jump a long way (different than running?)","86",,"86"
  // "88","Running Jump","Running while jumping","87",,"87"

  // "89","Swim","Must be learned","88",,"88"

  // "90","Dive","Take a breath and dive down based on stamina","89",,"89"

  // Fly – magic person?
}
