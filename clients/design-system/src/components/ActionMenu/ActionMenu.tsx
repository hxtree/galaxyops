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

interface Action {
  name: string;
  level: string;
  // Adjust properties as per your actual data structure
  // Add more properties as needed
}

export type MenuTreeNode = {
  name: string;
  children: MenuTreeNode[];
  action?: Action;
};
export type MenuTree = MenuTreeNode[];

// TODO
// In character sheet skills should have a parent child relationship instead of a flat array

export const ActionMenu = (props: ActionMenuProps) => {
  const { spacing, testId } = props;
  const [pointers, setPointers] = useState<number[]>([0]);
  const [menuTree, setMenuTree] = useState<MenuTree>([]);
  const [menuFlat, setMenuFlat] = useState<string[]>([]);

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

    const newMenuTree: MenuTreeNode[] = [];

    newSkills.forEach((skill: any) => {
      if (!skill.menuSlot) {
        return;
      }
      const name = skill.name;
      const parentName = skill.menuSlot.name;

      const parent = newMenuTree.find(node => node.name === parentName);
      if (parent) {
        parent.children.push({
          name,
          children: [],
          action: skill,
        });
        return;
      }

      newMenuTree.push({
        name: parentName,
        children: [
          {
            name,
            children: [],
            action: skill,
          },
        ],
      });
    });
    setMenuTree(newMenuTree);
    setPointers([0]);
  }, []);

  useEffect(() => {
    const displayItems: string[] = [];
    if (pointers.length === 1) {
      menuTree.forEach((menuItem: MenuTreeNode) => {
        displayItems.push(menuItem.name);
      });
      setMenuFlat(displayItems);
      return;
    }

    const menuItems: MenuTreeNode = getElementByPointer(
      menuTree,
      pointers.slice(0, -1),
    );
    if (!menuItems || !menuItems.children) {
      // TODO: action item was selected resetting pointer
      setPointers(pointers.slice(0, -1));
      return;
    }

    menuItems.children.forEach((menuItem: MenuTreeNode) => {
      displayItems.push(`${menuItem.name} ${menuItem.action?.level}`);
    });
    setMenuFlat(displayItems);
  }, [pointers]);

  useEffect(() => {
    const handleWindowKeyUp = (event: KeyboardEvent) => handleKeyUp(event);

    document.addEventListener('keyup', handleWindowKeyUp);
    return () => {
      document.removeEventListener('keyup', handleWindowKeyUp);
    };
  }, [pointers, menuTree, menuFlat]);

  function getElementByPointer(
    array: MenuTreeNode[],
    pointer: number[],
  ): MenuTreeNode[] | MenuTreeNode {
    if (pointer.length === 0) {
      return array; // Base case: return the array itself if pointer is empty
    }

    const index = pointer[0];
    const rest = pointer.slice(1);

    // Check if the index is within bounds
    if (index < 0 || index >= array.length) {
      throw new Error('Index out of bounds');
    }

    // Recursively access the nested array
    return getElementByPointer(array[index], rest);
  }

  const movePointers = (direction: string) => {
    if (direction === 'up') {
      const lastItem = pointers[pointers.length - 1];
      if (lastItem === 0) {
        return;
      }
      setPointers([...pointers.slice(0, -1), lastItem - 1]);
    } else if (direction === 'down') {
      if (pointers.length === 0) {
        setPointers([1]);
        return;
      }
      const lastItem = pointers[pointers.length - 1];
      if (lastItem === menuFlat.length - 1) {
        return;
      }
      setPointers([...pointers.slice(0, -1), lastItem + 1]);
    } else if (direction === 'back') {
      if (pointers.length === 1) {
        return;
      }
      setPointers([...pointers.slice(0, -1)]);
      return;
    } else if (direction === 'select') {
      setPointers([...pointers, 0]);
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    event.preventDefault();
    switch (event.key) {
      case 'w':
        movePointers('up');
        break;
      case 's':
        movePointers('down');
        break;
      case 'a':
        movePointers('back');
        break;
      case 'd':
        movePointers('select');
        break;
      default:
        break;
    }
  };

  return (
    <Spacer {...spacing}>
      <div
        className={`action-menu`}
        data-testid={testId ? `${testId}-root` : null}
      >
        <ul>
          {menuFlat.map((menuItem: string, index: number) => {
            return (
              <li key={index}>
                {menuItem}
                {index == pointers[pointers.length - 1] ? ' <- ' : '  '}
              </li>
            );
          })}
        </ul>
      </div>
    </Spacer>
  );
};

export default ActionMenu;
