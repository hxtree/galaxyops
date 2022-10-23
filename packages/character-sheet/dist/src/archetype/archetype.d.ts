import { Drive, Life, Spirit } from '../component/gauges';
import { Stats } from '../component/stats';
import { Trait } from '../component/trait';
import { Items } from '../component/item.gear';
import { StatusEffect } from '../component/status.effect';
import { Discipline } from '../component/discipline';
import { Outfit } from '../component/outfit.gear';
import { GearSlot } from '../component/gear';
import { Token } from '../component/token.gear';
import { Summon } from '../component/skill/summon.skill';
import { Weapon } from '../component/weapon.gear';
export declare type CharacterSheet = {
    token?: Token;
};
/**
 * A human or non-humanoid base character.
 * base character information not stored in database
 * contains potentialGeatSlots, potentialDisciplines, etc.
 * only contains archetypes that can become character sheets, would not include a tree, etc.
 */
export declare namespace ArchetypeList {
    type Character = {
        name: string;
        surname?: string;
        description?: string;
        history?: string;
        backstory?: string;
        experience?: number;
        alias?: string[];
        symbolizes?: string[];
        affiliation?: string[];
        weaponProficiency?: Weapon[];
        life?: Life;
        drive?: Drive;
        spirit?: Spirit;
        stats?: Stats;
        traits?: Trait[];
        statusEffects?: StatusEffect[];
        potentialDisciplines?: Discipline[];
        potentialOutfits?: Outfit[];
        potentialGeatSlots?: GearSlot[];
        summonCompatibility?: Summon[];
        loot?: Items;
    };
    /**
     * Three Keepers
     */
    const MischievousPiebald: Character;
    const JanusPersian: Character;
    const LoomeeAngora: Character;
    /**
     * Three Destroyer
     */
    const VallonOni: Character;
    const OuernOni: Character;
    const MeekuOni: Character;
    /**
     * Seven Virtues
     */
    const ArinothDiyath: Character;
    const FayeImago: Character;
    const GaaliRuin: Character;
    const GunterStonewell: Character;
    const MalaceTsia: Character;
    const PennyKibbutz: Character;
    const TraezUthsha: Character;
    /**
     * Seven Sins
     */
    const Void: Character;
    const Genki: Character;
    const Lawzon: Character;
    const Madhi: Character;
    const Suyri: Character;
    const Wisp: Character;
    const Asmin: Character;
    const Diag: Character;
    /**
     * Notable Bad Guys
     */
    const Monarch: Character;
    const Viceroy: Character;
    /**
     * Battlers
     */
    const Spider: Character;
    const SeaHorse: Character;
    const SensitivePlant: Character;
}
export declare type ArchetypeKey = typeof ArchetypeList;
export declare type ArchetypeType = keyof ArchetypeKey;
export declare const Archetype: (id: string) => ArchetypeList.Character;
export declare const getArchetypeList: () => string[];
