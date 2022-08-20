/**
 * Movement Actions
 * actions that are directly related to movement
 */

// Climb –
// "83","Trek","Used to determine how steep an angled tile you can stand on. If your character fails to trek the tile then they will fall from it and will be to step onto it.","82",,"82"
// Trek – Used to determine how steep an angled tile you can stand on. If your character fails to trek the tile then they will fall from it and will be to step onto it.
// Duck – (Hold Square + Backwards?) used to evaded attacks works best if preformed during attack.
// "84","Duck","(Hold Square + Backwards?) used to evaded attacks works best if preformed during attack.","83",,"83"
// Jump – (Square) Jumping uses stamina and can be used to move to otherwise unreachable places. The more stamina
// Basic – (Square) jump.
// High – (Stamina Boost + Square) jump straight up in the air using a stamina boost.
// Long – (Directional Pad + Press Square) jump a long way.
// Running – (Running + Square)
// Swim
// Dive
// Run – (Hard press Direction Pad with Stamina) – Move quickly using stamina.
// Walk – (Light press Direction Pad) Move slowly.
// Fly – magic person

// "85","Jump","(Square) Jumping uses stamina and can be used to move to otherwise unreachable places. The more stamina","84",,"84"
// "86","High Jump","Charged vertical jump","85",,"85"
// "87","Long Jump","Jump a long way (different than running?)","86",,"86"
// "88","Running Jump","Running while jumping","87",,"87"
// "89","Swim","Must be learned","88",,"88"
// "90","Dive","Take a breath and dive down based on stamina","89",,"89"
// "91","Run","Move quickly using stamina","90",,"90"
// "93","Fly","magic person?","92",,"92"

export interface Movement {
  name: string;
}

export class Walk implements Movement {
  name: 'Walk';
  description: 'Move slowly forward or backward side to side';
}

export class Run implements Movement {
  name: 'Run';
  description: 'Move quickly using stamina';
  // consumes stanmina
}

export class BackFlip implements Movement {
  name: 'Back Flip';
  description: 'Quickly move backwards';
}

export class DoubleBackFlip implements Movement {
  name: 'DoubleBackFlip';
  description: 'Quickly move backwards twice';
}
