import {
  MenuSlot,
  Skill,
  SkillLevel,
  PartyMemberToken,
} from '@galaxyops/character-sheet-contracts';
import { SummonActions } from './summon-actions.skill';
import { ArchetypeIds } from '../archetypes';

/**
 * Summons are companions that may be called into play in varying ways to aid party.
 * Summons can only be used with the Command action or through the Interaction Command.
 * Although they accept Commands they do not necessarily follow them.
 * Summons have different levels and stats just like characters.
 * The more a Player uses them the more powerful they grow.
 */
export namespace Summon {
  export const VACHEL_LV1: Skill = {
    description: 'Summon a silver bull',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Vachel',
    outcome: {
      PARTY: [
        {
          archetype: 'VACHEL',
          token: PartyMemberToken.COPPER,
        },
      ],
    },
  };

  export const FELIX_LV1: Skill = {
    description: 'Summon a white lop-eared dwarf rabbit',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Felix',
    outcome: {
      PARTY: [
        {
          archetype: 'FELIX',
          token: PartyMemberToken.COPPER,
        },
      ],
    },
  };

  export const HERALDIC_LION_LV1: Skill = {
    description: 'Summon a regal lion with an impeccable stance',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Heraldic Lion',
    outcome: {
      PARTY: [
        {
          archetype: 'HERALDIC_LION',
          token: PartyMemberToken.COPPER,
        },
      ],
    },
  };

  export const LYRE_LV1: Skill = {
    description: 'Summon a giant half Luna moth and lyrebird',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Lyre',
    outcome: {
      PARTY: [
        {
          archetype: 'LYRE',
          token: PartyMemberToken.COPPER,
        },
      ],
    },
  };

  export const SANDY_LV1: Skill = {
    description: 'Summon a box turtle',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Sandy',
    outcome: {
      PARTY: [
        {
          archetype: 'SANDY',
          token: PartyMemberToken.COPPER,
        },
      ],
    },
  };

  export const MISCHIEVOUS_LV1: Skill = {
    description: 'Summon a mischievous black and white cat',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Mischievous',
    outcome: {
      PARTY: [
        {
          archetype: 'MISCHIEVOUS',
          token: PartyMemberToken.COPPER,
        },
      ],
    },
  };

  export const SCRIBBLES_LV1: Skill = {
    description: 'Summon a flying squirrel',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Scribble',
    outcome: {
      PARTY: [
        {
          archetype: 'SCRIBBLES',
          token: PartyMemberToken.COPPER,
        },
      ],
    },
  };

  /**
   * Demon Summons primarily inspired by the Lesser Key of Solomon.
   * These are Malace's tattoos.
   */

  export const OUROBOROS_LV1: Skill = {
    description: 'Summon a demon that consumes itself.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Ouroboros',
    outcome: {
      PARTY: [
        {
          archetype: 'OUROBOROS',
          token: PartyMemberToken.COPPER,
        },
      ],
    },
  };

  export const ORIAS_LV1: Skill = {
    description:
      'Summon a Great Marquis of Hell, who rules over 30 legions of demons.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Orias',
    outcome: {
      PARTY: [
        {
          archetype: 'ORIAS',
          token: PartyMemberToken.COPPER,
        },
      ],
    },
  };

  export const ASMODAY_LV1: Skill = {
    description:
      'Summon a King of Hell with 72 legions of demons under his command.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Asmoday',
    outcome: {
      PARTY: [
        {
          archetype: 'ASMODAY',
          token: PartyMemberToken.COPPER,
        },
      ],
    },
  };

  export const BELPHEGOR_LV1: Skill = {
    description: 'Summon a demon associated with discoveries and inventions.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Belphegor',
    outcome: {
      PARTY: [
        {
          archetype: 'BELPHEGOR',
          token: PartyMemberToken.COPPER,
        },
      ],
    },
  };

  export const AMON_LV1: Skill = {
    description: 'Summon a Marquis of Hell who governs 40 legions of demons.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Amon',
    outcome: {
      PARTY: [
        {
          archetype: 'AMON',
          token: PartyMemberToken.COPPER,
        },
      ],
    },
  };

  export const BARBATOS_LV1: Skill = {
    description:
      'Summon a Duke of Hell who has power over 30 legions of demons.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Barbatos',
    outcome: {
      PARTY: [
        {
          archetype: 'BARBATOS',
          token: PartyMemberToken.COPPER,
        },
      ],
    },
  };
}
