import { AchievementInfo } from '../src/models/achievement.schema';
import { Trophy } from '../src/models/trophy.enum';

export const Achievements: AchievementInfo[] = [
  {
    title: 'Beat the Wind',
    eventListener: 'BattleOutcomeEvent',
    description: 'Defeated the World Tornado',
    trophyCriteria: [{ value: 1, trophy: Trophy.GOLD }],
  },
  {
    title: 'Scarf-less',
    eventListener: 'InventoryChangeEvent',
    description: "Lost Mother's scarf",
    trophyCriteria: [{ value: 1, trophy: Trophy.GOLD }],
  },
  {
    title: 'Poison Cake',
    eventListener: 'ItemsConsumedEvent',
    description: 'Poisoned by vanilla cake',
    trophyCriteria: [{ value: 1, trophy: Trophy.GOLD }],
  },
  {
    title: 'Catch A Kitty By The Toe',
    eventListener: 'BattleOutcomeEvent',
    description: 'How the heck did you earn this?',
    trophyCriteria: [{ value: 1, trophy: Trophy.GOLD }],
  },
  {
    title: 'Scholar',
    description: 'Read %n books',
    eventListener: 'ItemConsumedEvent',
    trophyCriteria: [
      { value: 10, trophy: Trophy.BRONZE },
      { value: 100, trophy: Trophy.SILVER },
      { value: 250, trophy: Trophy.GOLD },
    ],
  },
  {
    title: 'Scholar',
    description: 'Consume %n bowls of Chicken and Rice',
    eventListener: 'ItemConsumedEvent',
    trophyCriteria: [
      { value: 10, trophy: Trophy.BRONZE },
      { value: 100, trophy: Trophy.SILVER },
      { value: 250, trophy: Trophy.GOLD },
    ],
  },
];
