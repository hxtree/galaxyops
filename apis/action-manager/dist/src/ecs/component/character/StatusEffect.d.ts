/**
 * Status effects are abnormal states that may have positive or negative effects
 * they can be gained from actions or items and can be healed by resting, certain
 * abilities, or after some time.
 *
 * Status Effects are visible to the player
 */
export declare enum StatusEffect {
    LIFELESS = "Lifeless",
    KNOCKED_OUT = "Knocked Out",
    CONFUSED = "Confused",
    DRUNK = "Drunk",
    DOOMED = "Doomed",
    MORTALLY_WOUNDED = "Mortally Wounded",
    FROZEN = "Frozen",
    COLD = "Cold",
    BURNED = "Burned",
    BOUND = "Bound",
    SLEEPY = "Sleepy",
    STUNNED = "Stunned",
    DOWN = "Down",
    DISARMED = "Disarmed",
    EXILED = "Exiled",
    INFECTION = "Infection",
    METAMORPHIC = "Metamorphic",
    IGNORANT = "Ignorant",
    ZIPPED = "Zipped",
    SILENCE = "Silence",
    FATHOM = "Fathom",
    DROWNED = "Drowned",
    FEAR = "Fear",
    BERSERK = "Berserk",
    BLITZ = "Blitz",
    OMNI = "Omni",
    BARRIER = "Barrier",
    REFLECT = "Reflect"
}
export declare type StatusEffects = Array<StatusEffect>;
