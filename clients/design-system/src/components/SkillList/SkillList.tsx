/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react';
import './style.module.scss';
import { Spacer } from '../Spacer/Spacer';
import { SpacerProps } from '../Spacer/SpacerProps.type';
import './style.module.scss';
import {
  Archetype,
  DisciplineProgression,
  Discipline,
  SkillProgression,
} from '@galaxyops/character-sheet-contracts';

export type SkillListProps = {
  data: Archetype;
  spacing?: SpacerProps;
  testId?: string;
};

export const SkillList = (props: SkillListProps) => {
  const { data, spacing, testId } = props;
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newSkills: any = [];
    if (!data.potentialDisciplines) {
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
        newSkills.push(skillProgression.skill);
      });
    });
  }, [data]);

  return (
    <Spacer {...spacing}>
      <div
        className={`action-menu`}
        data-testid={testId ? `${testId}-root` : null}
        ref={componentRef}
      >
        <div className={`action-menu-outer-border mt--3`}>
          <div className={`action-menu-inner-border`}>
            [Skills]
            <h2>Passive Skills</h2>
            <h2>Active Skills</h2>
            <h2>Discipline Skills</h2>, , ,
          </div>
        </div>
      </div>
    </Spacer>
  );
};

export default SkillList;
