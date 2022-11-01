export namespace affiliations {
  export type Affiliation = {
    name: string;
    description?: string;
  };

  export const Brotherhood: Affiliation = {
    name: 'Brotherhood',
  };

  export const SoliderForces: Affiliation = {
    name: 'Solider Forces',
  };

  export const MagiOrder: Affiliation = {
    name: 'Magi Order',
    description:
      'They are a group of divine people. ' +
      'They were formed to keep the greater evils of the world at bay. ' +
      'Magi is a class that enables it followers to harness the power of the Eight Devils of the old world (a secret that the Elders keep). ' +
      'The class Magi can only be taking up by the Divine Race. ' +
      'Faye gem reacts with devils in combat to gain new classes',
  };

  export const Catchers: Affiliation = {
    name: 'Catchers',
    description:
      'They wear mask when they fight to become warriors so that when they return home they can remove their masks and become civilians again. ' +
      'Those who shed kill when not wearing a mask will always be warriors and cannot return home. ' +
      'They specialize is summoning spirits.',
  };

  export const Rebels: Affiliation = {
    name: 'Rebels',
    description:
      'A group that has been formed of people opposing both sides of the conflict that only want peace. ' +
      'They are focused around destroying the ancient technology discovered to prevent the war from escalation.',
  };

  export const Originals: Affiliation = {
    name: 'Originals',
  };

  export const Archangles: Affiliation = {
    name: 'Archangles',
    description:
      'They were an ancient race that lived among the clouds that had wings and used magic. ' +
      'They banished their sinners by cutting of their wings and throwing them to the land below. ' +
      'Some retained their powers and thus formed the Magi Order.',
  };

  export const Guardians: Affiliation = {
    name: 'Gaurdians',
  };

  export const EightDevils: Affiliation = {
    name: 'Eight Devils',
    description:
      'Eight beings that were born to destroy the world. ' +
      'Their power was too great. ' +
      'They were locked away by the race that lives in the clouds. ',
  };

  export const VallonsSeven: Affiliation = {
    name: "Vallon's Seven",
    description:
      'A group that has arisen that seeks an end to the world.' +
      'They are made up of the reincarnated sprites of the eight devils lead by Vallon.',
  };

  export const Oceania: Affiliation = {
    name: 'Oceania',
    description:
      'The higher ups are very corrupt in order to save what they believe in.' +
      'They have started to resurrect ancient technology that can be used to destroy the other side.' +
      'They are a peaceful nation that is always at war.',
  };

  export const Eurasia: Affiliation = {
    name: 'Eurasia',
  };

  export const Barbarians: Affiliation = {
    name: 'Barbarians',
    description:
      'They are a nearly extinct peoiple as solider forces take over their land.' +
      'They are a primitive but are by no means barbarians.',
  };

  export const Ninja: Affiliation = {
    name: 'Ninja',
  };
}
