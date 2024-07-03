/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import './style.module.scss';
import { Spacer } from '../Spacer/Spacer';
import { SpacerProps } from '../Spacer/SpacerProps.type';
import './style.module.scss';
import data from './mockData.json';

export type ActionMenuProps = {
  actions: string[];
  spacing?: SpacerProps;
  testId?: string;
};

export const ActionMenu = (props: ActionMenuProps) => {
  const { spacing, testId } = props;

  const [pointer, setPointer] = useState<number[]>([]);
  const [skills, setSkills] = useState<
    (
      | {
          name: string;
          description: string;
          consumes: string;
          menuSlot: number;
          buttonCombos: {
            inOrder: string[];
            timingWindowMs: number;
            context: string;
          }[];
        }
      | {
          name: string;
          description: string;
          menuSlot: number;
          consumes?: undefined;
          buttonCombos?: undefined;
        }
      | {
          name: string;
          description: string;
          backstory: string;
          menuSlot: number;
          effect?: undefined;
        }
      | {
          name: string;
          description: string;
          effect: never[];
          menuSlot: number;
          backstory?: undefined;
        }
      | {
          name: string;
          description: string;
          menuSlot: number;
          effect?: undefined;
        }
      | { name: string; description: string; effect: never[]; menuSlot: number }
    )[]
  >([]);
  const [actions, setActions] = useState<
    (
      | {
          name: string;
          description: string;
          consumes: string;
          menuSlot: number;
          buttonCombos: {
            inOrder: string[];
            timingWindowMs: number;
            context: string;
          }[];
        }
      | {
          name: string;
          description: string;
          menuSlot: number;
          consumes?: undefined;
          buttonCombos?: undefined;
        }
      | {
          name: string;
          description: string;
          backstory: string;
          menuSlot: number;
          effect?: undefined;
        }
      | {
          name: string;
          description: string;
          effect: never[];
          menuSlot: number;
          backstory?: undefined;
        }
      | {
          name: string;
          description: string;
          menuSlot: number;
          effect?: undefined;
        }
      | { name: string; description: string; effect: never[]; menuSlot: number }
    )[][]
  >([]);

  useEffect(() => {
    // Step 2: Use useEffect to call getSkills on mount
    const skills: React.SetStateAction<
      (
        | {
            name: string;
            description: string;
            consumes: string;
            menuSlot: number;
            buttonCombos: {
              inOrder: string[];
              timingWindowMs: number;
              context: string;
            }[];
          }
        | {
            name: string;
            description: string;
            menuSlot: number;
            consumes?: undefined;
            buttonCombos?: undefined;
          }
        | {
            name: string;
            description: string;
            backstory: string;
            menuSlot: number;
            effect?: undefined;
          }
        | {
            name: string;
            description: string;
            effect: never[];
            menuSlot: number;
            backstory?: undefined;
          }
        | {
            name: string;
            description: string;
            menuSlot: number;
            effect?: undefined;
          }
        | {
            name: string;
            description: string;
            effect: never[];
            menuSlot: number;
          }
      )[]
    > = [];

    data.potentialDisciplines.forEach(discipline => {
      discipline.progression.forEach(progression => {
        skills.push(progression.skill);
      });
    });

    setSkills(skills);

    const actionMenus = () => {
      const menu: (
        | {
            name: string;
            description: string;
            consumes: string;
            menuSlot: number;
            buttonCombos: {
              inOrder: string[];
              timingWindowMs: number;
              context: string;
            }[];
          }
        | {
            name: string;
            description: string;
            menuSlot: number;
            consumes?: undefined;
            buttonCombos?: undefined;
          }
        | {
            name: string;
            description: string;
            backstory: string;
            menuSlot: number;
            effect?: undefined;
          }
        | {
            name: string;
            description: string;
            effect: never[];
            menuSlot: number;
            backstory?: undefined;
          }
        | {
            name: string;
            description: string;
            menuSlot: number;
            effect?: undefined;
          }
        | {
            name: string;
            description: string;
            effect: never[];
            menuSlot: number;
          }
      )[][] = [];

      skills.forEach((skill: any) => {
        if (!menu[skill.menuSlot]) {
          menu[skill.menuSlot] = [];
        }
        menu[skill.menuSlot].push(skill);
      });

      return menu;
    };

    setActions(actionMenus);
  }, []); // Empty dependency array means this effect runs once on mount

  function addPointer(id: number) {
    setPointer((pointer: number[]) => [...pointer, id]);
  }

  function removePointer() {
    if (pointer.length === 0) {
      return;
    }
    setPointer(pointer => pointer.slice(0, -1));
  }

  return (
    <Spacer {...spacing}>
      <div
        className={`action-menu`}
        data-testid={testId ? `${testId}-root` : null}
      >
        <ul>
          {actions &&
            actions[1].map((action: any, index) => {
              return <li key={index}>{action.name}</li>;
            })}
        </ul>
      </div>
      <button onClick={() => addPointer(1)}>Add</button>
      <button onClick={() => removePointer()}>Remove</button>
      <button onClick={() => console.log(pointer)}>Log</button>
      <button onClick={() => console.log(skills)}>Log2</button>
      <button onClick={() => console.log(actions)}>Log2</button>
    </Spacer>
  );
};

export default ActionMenu;
