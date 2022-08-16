import {GearSlot} from './Gear';

/**
 * Garment
 * A piece of clothing.
 */

class CowhideVest {
  name: 'Cowhide Vest';
  description: 'A brown protective vest made out of cow hide.';
  gearSlots: [GearSlot.TORSO];
  // +5 defense
}

// Todo how is cowhide stackable with white shirt?
class WhiteShirt {
  name: 'White Shirt';
  description: 'A plain white shirt';
  gearSlots: [GearSlot.TORSO];
}
