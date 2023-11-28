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
    description: 'Defeated the world Tornado',
    trophy: Trophy.GOLD,
  },
  {
    title: 'Scarfless',
    description: "Lost Mother's scarf",
    trophy: Trophy.GOLD,
  },
  {
    title: 'Catch A Kitty By The Toe',
    description: '',
    trophy: Trophy.GOLD,
  },
  {
    title: 'Scholar',
    description: 'Read X books',
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
