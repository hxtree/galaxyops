import React, { useRef } from 'react';
import { Spacer } from '../../components/Spacer/Spacer';
import { SpacerProps } from '../../components/Spacer/SpacerProps.type';
// import './style.module.scss';
import { Archetype } from '@galaxyops/character-sheet-contracts';

export type InteractionMenuProps = {
  data: Archetype;
  spacing?: SpacerProps;
  testId?: string;
};

export const InteractionMenu = (props: InteractionMenuProps) => {
  const { data, spacing, testId } = props;
  const componentRef = useRef<HTMLDivElement>(null);

  console.log(data);

  // TODO flesh out interaction menu
  // based on interaction available to the character archetype
  // and the current game state

  // TODO generally there would be only one interaction at a time but
  // we could have a list of interactions that are available to the character
  // for example push or pull a lever, open a chest, etc.

  return (
    <Spacer {...spacing}>
      <div
        className={`action-menu`}
        data-testid={testId ? `${testId}-root` : null}
        ref={componentRef}
      >
        <div className={`action-menu-outer-border`}>
          <div className={`action-menu-inner-border`}>
            <ul className={`menu-single`}>
              <li className={`link`}>Open Chest</li>
            </ul>
          </div>
        </div>
      </div>
    </Spacer>
  );
};

export default InteractionMenu;
