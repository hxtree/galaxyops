import {Attribute} from '../character/Attribute';
import {EffectTag} from '../character/EffectTag';
import {Action} from './Action';

/**
 * Weapon Actions are actions directly related to simple use of the players equipped weapon.
 * Weapons Actions are a type of Command Menu Action which means they can be used in game.
 * They are always located in the first slot of the Basic Command Menu Actions.
 */
export interface WeaponAction extends Action {}

class Parry implements WeaponAction {
  name: 'Parry';
  description: 'Ward off incoming attack with a countermove.';
  effect: [];
}

class Slash implements WeaponAction {
  name: 'Slash';
  description: 'Attack with a blade.';
  effect: [
    {
      remove: Attribute.LIFE;
      quanity: '1d6+2';
      tags: [EffectTag.PHYSICAL];
    },
  ];
}

class Strike implements WeaponAction {
  name: 'Strike';
  description: 'Attack with a sudden effect with a blade.';
  effect: [
    {
      remove: Attribute.LIFE;
      quanity: '1d6+2';
      tags: [EffectTag.PHYSICAL];
    },
  ];
}

class Stab implements WeaponAction {
  name: 'Stab';
  description: 'Attach with a forward striking motion with a blade.';
  effect: [
    {
      remove: Attribute.LIFE;
      quanity: '1d6+2';
      tags: [EffectTag.PHYSICAL];
    },
  ];
}

class Chop implements WeaponAction {
  name: 'Chop';
  description: 'Attack with a downward motion with a blade.';
  effect: [
    {
      remove: Attribute.LIFE;
      quanity: '1d6+2';
      tags: [EffectTag.PHYSICAL];
    },
  ];
}

// Weapon Actions (Slot 1)
// Class Tech
// Weapon Tech
// Slash – (stamina)
