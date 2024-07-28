import { Skill } from '@galaxyops/character-sheet-contracts';

export type MenuTreeNode = {
  name: string;
  children: MenuTreeNode[];
  action?: Skill;
};
