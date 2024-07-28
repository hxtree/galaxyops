import { useEffect } from 'react';
import { MenuTreeNode } from './MenuTreeNode.type';
import { MenuItem } from './MenuItem.type';

export type UseMenuDisplayProps = {
  pointers: number[];
  menuTree: MenuTreeNode[];
  setMenuFlat: (items: MenuItem[]) => void;
  setPointers: (pointers: number[]) => void;
};

/**
 * This hook creates a flat list of menu items to display based on the current
 * menu pointers
 */
export const useFlatMenu = ({
  pointers,
  menuTree,
  setMenuFlat,
  setPointers,
}: UseMenuDisplayProps) => {
  useEffect(() => {
    function getElementByPointer(
      array: MenuTreeNode[],
      pointer: number[],
    ): MenuTreeNode[] {
      if (pointer.length === 0) {
        return array;
      }

      const index = pointer[0];
      if (index < 0 || index >= array.length) {
        throw new Error('Index out of bounds');
      }

      return getElementByPointer(
        array[index] as unknown as MenuTreeNode[],
        pointer.slice(1),
      );
    }

    const displayItems: MenuItem[] = [];
    if (pointers.length === 1) {
      menuTree.forEach((menuItem: MenuTreeNode) => {
        displayItems.push({
          name: menuItem.name,
          level: menuItem.action?.level,
        });
      });
      setMenuFlat(displayItems);
      return;
    }

    const ancestorPointers = pointers.slice(0, -1);
    const menuItems = getElementByPointer(
      menuTree,
      ancestorPointers,
    ) as unknown as MenuTreeNode;

    if (menuItems?.children === undefined) {
      setPointers(ancestorPointers);
      return;
    }

    menuItems.children.forEach((menuItem: MenuTreeNode) => {
      displayItems.push({ name: menuItem.name, level: menuItem.action?.level });
    });

    setMenuFlat(displayItems);
  }, [pointers, menuTree, setMenuFlat, setPointers]);
};
