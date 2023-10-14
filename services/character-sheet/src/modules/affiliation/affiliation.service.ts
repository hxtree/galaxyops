import { Injectable } from '@nestjs/common';

export enum Reputation {
  HONORED = 'HONORED',
  FRIENDLY = 'FRIENDLY',
  NEUTRAL = 'NEUTRAL',
  HATED = 'HATED',
}

@Injectable()
export class AffiliationService {
  toString(amount: number | undefined): Reputation {
    if (amount === undefined) {
      return Reputation.NEUTRAL;
    }
    if (amount > 90) {
      return Reputation.HONORED;
    }
    if (amount > 50) {
      return Reputation.FRIENDLY;
    }

    if (amount < 0) {
      return Reputation.HATED;
    }

    return Reputation.NEUTRAL;
  }
}
