/**
 * Status effects are abnormal states that may have positive or negative effects
 * they can be gained from actions or items and can be healed by resting, certain
 * abilities, or after some time.
 *
 * Status Effects are visible to the player
 */
export enum StatusEffect {
  // afflictions
  LIFELESS = 'Lifeless', // Afflicted when Life is less than 0
  KNOCKED_OUT = 'Knocked Out', // is unable to move. Set when Stamina is less than 0.
  CONFUSED = 'Confused',
  DRUNK = 'Drunk', //  accuracy decreases.
  DOOMED = 'Doomed', // heal before timer runs out or KOs
  MORTALLY_WOUNDED = 'Mortally Wounded',
  FROZEN = 'Frozen',
  COLD = 'Cold', //  Speed reduced
  BURNED = 'Burned',
  BOUND = 'Bound', // Cannot do anything but Break Free or use Tool  (interaction)
  SLEEPY = 'Sleepy',
  STUNNED = 'Stunned',
  DOWN = 'Down', // is disabled and has fallen down
  DISARMED = 'Disarmed', // must get weapon and arm self again in order to attack.
  EXILED = 'Exiled', // Kick out of battle cannot return until battle is over
  INFECTION = 'Infection', // Damage is received each turn until infliction is healed.
  METAMORPHIC = 'Metamorphic', // You are inflicted with random status affect each turn.
  IGNORANT = 'Ignorant', // unable to use Learn
  ZIPPED = 'Zipped', // cannot use Gear.
  SILENCE = 'Silence', // cannot use Spells.
  FATHOM = 'Fathom', // cannot use Drive.
  DROWNED = 'Drowned',
  FEAR = 'Fear', // cannot move.
  STOP = 'Stop', // frozen in time.
  SLOW = 'Slow', // speed reduced.

  // buffs
  BERSERK = 'Berserk', // can only attack. Power increased by Drive.
  BLITZ = 'Blitz', // Strength and are speed modified for only duration of battle (-5x through +5x)
  OMNI = 'Omni', // enters a berserk like mode and attacks uncontrollable.
  BARRIER = 'Barrier', // damage taken decreases
  REFLECT = 'Reflect', // damage is reflected back
  HASTE = 'Haste', // speed increased
}

export type StatusEffects = Array<StatusEffect>;
