export enum Reputation {
  HONORED = 'HONORED',
  FRIENDLY = 'FRIENDLY',
  NEUTRAL = 'NEUTRAL',
  HATED = 'HATED',
}

export type Standing = {
  affiliation: Affiliation;
  reputation: Reputation;
};

// The affiliation relationship tendency towards another
export type Affiliation = {
  name: string;
  description?: string;
  lore?: string[];
  history?: string[];
  aliases?: string[];
  parentAffiliation?: Affiliation;
  // notableMembers?: string[];
  standings?: Standing[];
};
