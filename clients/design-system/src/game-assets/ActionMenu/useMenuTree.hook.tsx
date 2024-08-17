import { useEffect } from 'react';
import {
  Discipline,
  Skill,
  DisciplineProgression,
  SkillProgression,
  Archetype,
} from '@galaxyops/character-sheet-contracts';
import { MenuTreeNode } from './MenuTreeNode.type';

type UseMenuTreeProps = {
  data: Archetype; // TODO - this should be able to support a character sheet
  setMenuTree: (menuTree: MenuTreeNode[]) => void;
  setPointers: (pointers: number[]) => void;
};

/**
 * This hook creates a tree structure of the skills from the character sheet
 * data
 */
export const useMenuTree = ({
  data,
  setMenuTree,
  setPointers,
}: UseMenuTreeProps) => {
  useEffect(() => {
    const newSkills: Skill[] = [];
    const newMenuTree: MenuTreeNode[] = [];

    if (!data.traits && !data.potentialDisciplines) {
      setMenuTree(newMenuTree);
      setPointers([0]);
      return;
    }

    if (data.traits) {
      data.traits.forEach(trait => {
        if (!trait) {
          return;
        }

        if ('skill' in trait && trait.skill) {
          newSkills.push(trait.skill);
        }
      });
    }

    if (data.potentialDisciplines) {
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
    }

    newSkills.forEach((skill: Skill) => {
      if (!skill.menuSlot) {
        return;
      }
      const name = skill.name;
      const parentName = skill.menuSlot.name;
      const level = skill.level;

      let parent = newMenuTree.find(node => node.name === parentName);
      if (!parent) {
        parent = {
          name: parentName,
          children: [],
        };
        newMenuTree.push(parent);
      }

      const existingChildIndex = parent.children.findIndex(
        child => child.name === name,
      );

      if (existingChildIndex !== -1) {
        const existingChild = parent.children[existingChildIndex];
        if (
          existingChild.action &&
          existingChild.action.level &&
          existingChild.action.level < level
        ) {
          existingChild.action = skill;
          return;
        }
        return;
      }

      parent.children.push({
        name,
        children: [],
        action: skill,
      });
    });

    setMenuTree(newMenuTree);
    setPointers([0]);
  }, [data, setMenuTree, setPointers]);
};
