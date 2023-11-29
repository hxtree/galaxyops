import { Trophy } from './trophy.enum';

export type AchievementType = {
  title: string;
  description: string;
  trophy: Trophy;
  progress?: number;
};

export const Achievements: AchievementType[] = [
  {
    title: 'Beat the Wind',
    description: 'Defeated the World Tornado',
    trophy: Trophy.GOLD,
  },
  {
    title: 'Scarf-less',
    description: "Lost Mother's scarf",
    trophy: Trophy.GOLD,
  },
  {
    title: 'Catch A Kitty By The Toe',
    description: 'How the heck did you earn this?',
    trophy: Trophy.GOLD,
  },
  {
    title: 'Scholar',
    description: 'Read 10 books',
    trophy: Trophy.SILVER,
  },
  {
    title: 'Scholar',
    description: 'Read 100 books',
    trophy: Trophy.GOLD,
  },
];

//   // TODO how to handle gold and platinum versions of same trophy
//   {
//     title: 'Chicken And Rice',
//     trophy() =>
//       {
//         description: 'Consume 200 bowls of Chicken and Rice',
//         trophy: Trophy.GOLD
//         condition: progress >= 10
//       },
//       {
//         description: 'Consume 100 bowls of Chicken and Rice',
//         trophy: Trophy.GOLD
//         condition: progress >= 10
//       }
//       {
//         description: 'Consume 10 bowls of Chicken and Rice',
//         trophy: Trophy.GOLD
//         condition: progress >= 10
//       }
//     ]
//     eventListener: ITEM_CONSUMED, // SQS -> for each event listener, if match increment progress
//   },
// ];
