import React, { useState } from 'react';
import './style.module.scss';
import { Spacer } from '../Spacer/Spacer';
import { SpacerProps } from '../Spacer/SpacerProps.type';
import './style.module.scss';

export type ActionMenuProps = {
  actions: string[];
  spacing?: SpacerProps;
  testId?: string;
};

export const ActionMenu = (props: ActionMenuProps) => {
  const { actions, spacing, testId } = props;

  const [selectionId, setSelectionId] = useState(0);

  setSelectionId(1);
  console.log(actions);
  console.log(selectionId);
  return (
    <Spacer {...spacing}>
      <div
        className={`action-menu`}
        data-testid={testId ? `${testId}-root` : null}
      >
        <ul>
          <li>Slash Lv2</li>
          <li>Heal Lv9</li>
        </ul>
      </div>
    </Spacer>
  );
};
export default ActionMenu;
