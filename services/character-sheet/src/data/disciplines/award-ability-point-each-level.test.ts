import { awardAbilityPointEachLevel } from './award-ability-points-each-level';

describe('awardAbilityPointEachLevel()', () => {
  it('returns correct progression of ability points', () => {
    const abilityPoints = 2;
    const levelInterval = 4;
    const maxLevel = 10;
    const progression = awardAbilityPointEachLevel(
      abilityPoints,
      levelInterval,
      maxLevel,
    );

    expect(progression).toEqual([
      { abilityPoints: 2, level: 4 },
      { abilityPoints: 2, level: 8 },
    ]);
  });

  it('returns correct progression of ability points for decimal levelInterval', () => {
    const abilityPoints = 2;
    const levelInterval = 2.5;
    const maxLevel = 10;
    const progression = awardAbilityPointEachLevel(
      abilityPoints,
      levelInterval,
      maxLevel,
    );

    expect(progression).toEqual([
      { abilityPoints: 2, level: 3 },
      { abilityPoints: 2, level: 5 },
      { abilityPoints: 2, level: 8 },
      { abilityPoints: 2, level: 10 },
    ]);
  });

  it('returns correct progression of ability points for every level', () => {
    const abilityPoints = 10;
    const levelInterval = 1;
    const maxLevel = 3;
    const progression = awardAbilityPointEachLevel(
      abilityPoints,
      levelInterval,
      maxLevel,
    );

    expect(progression).toEqual([
      { abilityPoints: 10, level: 1 },
      { abilityPoints: 10, level: 2 },
      { abilityPoints: 10, level: 3 },
    ]);
  });
});
