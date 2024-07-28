/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';
import './style.module.scss';
import { Spacer } from '../../components/Spacer/Spacer';
import { SpacerProps } from '../../components/Spacer/SpacerProps.type';
import './style.module.scss';
import {
  Skill,
  Archetype,
  DisciplineProgression,
  Discipline,
  SkillProgression,
  // MenuSlot
} from '@galaxyops/character-sheet-contracts';

export type SkillListProps = {
  data: Archetype;
  spacing?: SpacerProps;
  testId?: string;
};

export const SkillList = (props: SkillListProps) => {
  const { data, spacing, testId } = props;
  const componentRef = useRef<HTMLDivElement>(null);
  const [passiveSkills, setPassiveSkills] = useState<Skill[]>([]);
  const [activeSkills, setActiveSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const newSkills: Skill[] = [];
    const newPassiveSkills: Skill[] = [];
    const newActiveSkills: Skill[] = [];
    const passiveSkillMenuSlot: string[] = [
      // 'Interaction',
      'None',
      // 'Movement',
    ];
    const activeSkillMenuSlot: string[] = [
      'Abilities',
      'Attack',
      'Drive',
      // 'Item',
      'Magic',
      'Summon',
      'Teamwork',
      'Tools',
      'Traps',
    ];

    if (!data.potentialDisciplines) {
      setPassiveSkills(newPassiveSkills);
      setActiveSkills(newActiveSkills);
      return;
    }

    data.potentialDisciplines.forEach((discipline: Discipline) => {
      if (!discipline.progression) {
        return;
      }
      discipline.progression.forEach((progression: DisciplineProgression) => {
        const skillProgression = progression as SkillProgression;

        if (!skillProgression.skill) {
          return;
        }

        const name = skillProgression.skill.name;
        const level = skillProgression.skill.level;
        const existingChildIndex = newSkills.findIndex(
          child => child.name === name,
        );

        if (existingChildIndex !== -1) {
          const existingChild = newSkills[existingChildIndex];
          if (
            existingChild &&
            existingChild.level &&
            existingChild.level < level
          ) {
            newSkills[existingChildIndex] = skillProgression.skill;
            return;
          }
          return;
        }

        newSkills.push(skillProgression.skill);
      });
    });

    newSkills.sort((a: Skill, b: Skill) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    newSkills.forEach((skill: Skill) => {
      if (passiveSkillMenuSlot.includes(skill.menuSlot.name)) {
        newPassiveSkills.push(skill);
      }

      if (activeSkillMenuSlot.includes(skill.menuSlot.name)) {
        newActiveSkills.push(skill);
      }
    });

    setPassiveSkills(newPassiveSkills);
    setActiveSkills(newActiveSkills);
  }, [data]);

  const levelFormat = (level: string | undefined) => {
    if (!level) {
      return '';
    }
    return level.replace('LV', 'Lv.');
  };

  return (
    <Spacer {...spacing}>
      <div
        className={`action-menu`}
        data-testid={testId ? `${testId}-root` : null}
        ref={componentRef}
      >
        <div className={`action-menu-outer-border mt--3`}>
          <div className={`action-menu-inner-border`}>
            <ul>
              <li>
                PASSIVE SKILLS:
                <br />
                {passiveSkills.map((skill: Skill, index: number) => (
                  <>
                    {index > 0 && ', '}
                    {skill.name} {levelFormat(skill.level)}
                  </>
                ))}
              </li>
              <li>
                ACTIVE SKILLS:
                <br />
                {activeSkills.map((skill: Skill, index: number) => (
                  <>
                    {index > 0 && ', '}
                    {skill.name} {levelFormat(skill.level)}
                  </>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Spacer>
  );
};

export default SkillList;
