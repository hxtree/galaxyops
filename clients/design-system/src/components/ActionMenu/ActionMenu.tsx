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
  const [skills, setSkills] = useState<any[]>([]);
  const [actions, setActions] = useState<any[]>([]);

  useEffect(() => {
    const newSkills: any = [];
    data.potentialDisciplines.forEach(discipline => {
      discipline.progression.forEach(progression => {
        if (!progression.skill) {
          return;
        }
        newSkills.push(progression.skill);
      });
    });

    setSkills(newSkills);

    const newActions: any = [];
    newActions['NONE'] = [];
    newActions['MAGIC'] = [];
    newActions['ABILITIES'] = [];
    newActions['TRAPS'] = [];
    newActions['TOOLS'] = [];
    newActions['SUMMON'] = [];
    newActions['ITEM'] = [];
    newActions['INTERACTION'] = [];
    newActions['ATTACK'] = [];
    newActions['MOVEMENT'] = [];
    newActions['DRIVE'] = [];
    newActions['TEAMWORK'] = [];

    newSkills.forEach((skill: any) => {
      if (!skill.menuSlot) {
        return;
      }
      const menuSlotUppercase = skill.menuSlot.name.toUpperCase();
      newActions[menuSlotUppercase].push(skill);
    });

    setActions(newActions);
  }, [data]); // Empty dependency array means this effect runs once on mount

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
            actions['SUMMON'].map((action: any, index: number) => {
              return <li key={index}>{action.name}</li>;
            })}
        </ul>
      </div>
      <button onClick={() => addPointer(1)}>Add</button>
      <button onClick={() => removePointer()}>Remove</button>
      <button onClick={() => console.log(pointer)}>Log</button>
      <button onClick={() => console.log(skills)}>Log Skills</button>
      <button onClick={() => console.log(actions)}>Actions</button>
    </Spacer>
  );
};

export default ActionMenu;
