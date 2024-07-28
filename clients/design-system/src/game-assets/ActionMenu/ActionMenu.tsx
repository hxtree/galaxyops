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

export type ActionMenuProps = {
  data: Archetype;
  spacing?: SpacerProps;
  testId?: string;
};

export type DisplayItem = {
  name: string;
  level?: string;
};

// TODO
// In character sheet skills should have a parent child relationship instead of a flat array

export const ActionMenu = (props: ActionMenuProps) => {
  const { data, spacing, testId } = props;
  const componentRef = useRef<HTMLDivElement>(null);
  const [pointers, setPointers] = useState<number[]>([0]);
  const [menuTree, setMenuTree] = useState<MenuTreeNode[]>([]);
  const [menuFlat, setMenuFlat] = useState<DisplayItem[]>([]);
  const hiddenMenuItems: string[] = ['None', 'Movement'];

  useMenuTree({ data, setMenuTree, setPointers });
  useFlatMenu({ pointers, menuTree, setMenuFlat, setPointers });

  useEffect(() => {
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
              {menuFlat.map((menuItem: DisplayItem, index: number) => {
                if (hiddenMenuItems.includes(menuItem.name)) {
                  return null;
                }

                const isActive = index == pointers[pointers.length - 1];
                return (
                  <li
                    key={index}
                    className={`link ${isActive && 'link-active'}`}
                    onClick={() => handleOnClick(index)}
                    onMouseOver={() => handleOnMouseOver(index)}
                  >
                    {menuItem.name}
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
