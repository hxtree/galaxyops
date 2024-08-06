/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';
import './style.module.scss';
import { Spacer } from '../../components/Spacer/Spacer';
import { SpacerProps } from '../../components/Spacer/SpacerProps.type';
import './style.module.scss';
import { Archetype } from '@galaxyops/character-sheet-contracts';
import { useClickOutside } from './useClickOutside.hook';
import { useMenuTree } from './useMenuTree.hook';
import { MenuTreeNode } from './MenuTreeNode.type';
import { useFlatMenu } from './useFlatMenu.hook';
import { MenuItem } from './MenuItem.type';

export type ActionMenuProps = {
  data: Archetype;
  size: number;
  spacing?: SpacerProps;
  testId?: string;
};

type Direction = 'highest' | 'lowest';

// TODO
// In character sheet skills should have a parent child relationship instead of a flat array

export const ActionMenu = (props: ActionMenuProps) => {
  const { data, spacing, testId } = props;
  const componentRef = useRef<HTMLDivElement>(null);
  const [pointers, setPointers] = useState<number[]>([0]);
  const [menuTree, setMenuTree] = useState<MenuTreeNode[]>([]);
  const [menuFlat, setMenuFlat] = useState<MenuItem[]>([]);
  const hiddenMenuItems: string[] = ['None', 'Movement'];
  const [setMenuFlatPosition] = useState<number>(0);

  useMenuTree({ data, setMenuTree, setPointers });
  useFlatMenu({
    pointers,
    menuTree,
    setMenuFlat,
    setPointers,
    hiddenMenuItems,
  });

  function getNextNid(
    menuItems: MenuItem[],
    currentNid: number,
    direction: Direction,
  ): number {
    // Filter the array based on the direction
    let filteredItems: MenuItem[];

    if (direction === 'highest') {
      filteredItems = menuItems.filter(item => item.nid > currentNid);
    } else if (direction === 'lowest') {
      filteredItems = menuItems.filter(item => item.nid < currentNid);
    } else {
      throw new Error(
        "Invalid direction specified. Use 'highest' or 'lowest'.",
      );
    }

    // If no items are found, return the currentNid
    if (filteredItems.length === 0) {
      return currentNid;
    }

    // Sort the filtered items by nid based on the direction
    filteredItems.sort((a, b) =>
      direction === 'highest' ? a.nid - b.nid : b.nid - a.nid,
    );

    // Return the nid of the first item in the sorted list
    return filteredItems[0].nid;
  }

  useEffect(() => {
    const movePointers = (direction: string) => {
      if (direction === 'up') {
        const lastItem = pointers[pointers.length - 1];
        if (lastItem === 0) {
          return;
        }
        const prevNid = getNextNid(menuFlat, lastItem, 'lowest');
        setPointers([...pointers.slice(0, -1), prevNid]);
      } else if (direction === 'down') {
        if (pointers.length === 0) {
          setPointers([1]);
          return;
        }
        const lastItem = pointers[pointers.length - 1];
        if (lastItem === menuFlat.length - 1) {
          return;
        }
        const nextNid = getNextNid(menuFlat, lastItem, 'lowest');
        setPointers([...pointers.slice(0, -1), nextNid]);
      } else if (direction === 'back') {
        if (pointers.length === 1) {
          return;
        }
        setMenuFlatPosition(pointers[pointers.length - 1]);
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
    const handleWindowKeyUp = (event: KeyboardEvent) => handleKeyUp(event);

    document.addEventListener('keyup', handleWindowKeyUp);
    return () => {
      document.removeEventListener('keyup', handleWindowKeyUp);
    };
  }, [pointers, menuTree, menuFlat]);

  const levelFormat = (level: string | undefined) => {
    if (!level) {
      return '';
    }
    return level.replace('LV', 'Lv.');
  };

  const handleOnClick = (index: number) => {
    setPointers([...pointers.slice(0, -1), index, 0]);
  };

  const handleOnMouseOver = (index: number) => {
    const currentPointer = pointers[pointers.length - 1];
    if (currentPointer === index) {
      return;
    }

    setPointers([...pointers.slice(0, -1), index]);
  };

  useClickOutside(componentRef, () => {
    setPointers([0]);
  });

  return (
    <Spacer {...spacing}>
      <div
        className={`action-menu`}
        data-testid={testId ? `${testId}-root` : null}
        ref={componentRef}
      >
        <div className={`action-menu-outer-border mt--3`}>
          <div className={`action-menu-inner-border`}>
            <ul className={`menu${menuFlat.length > 4 && ` menu-scrollbar`}`}>
              {menuFlat.map((menuItem: MenuItem, index: number) => {
                if (hiddenMenuItems.includes(menuItem.name)) {
                  return null;
                }

                // if(index < pointers[pointers.length - 1]){
                //   return null;
                // }
                const isActive = index == pointers[pointers.length - 1];
                return (
                  <li
                    key={index}
                    className={`link ${isActive && 'link-active'}`}
                    onClick={() => handleOnClick(index)}
                    onMouseOver={() => handleOnMouseOver(index)}
                  >
                    {menuItem.name} {menuItem.nid}
                    <span className={`level`}>
                      {levelFormat(menuItem.level)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Spacer>
  );
};

export default ActionMenu;
