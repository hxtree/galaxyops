import { useState, useEffect } from 'react';
import { keyboardBindings } from './keyBindings';
import { DateTime } from 'luxon';
import { PlayerInputRecord } from '../../core/types';

export default function useHandleInput(): PlayerInputRecord[] | null {
  const [inputState, setInputState] = useState<PlayerInputRecord[] | null>(
    null,
  );
  const pressedKeys = new Set<string>();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (pressedKeys.has(event.key)) {
        return; // Ignore if the key is already pressed
      }
      pressedKeys.add(event.key);

      const newInputRecords: PlayerInputRecord[] = [];

      // Handle different key strokes
      Object.entries(keyboardBindings).forEach(([direction, key]) => {
        if (event.key === key) {
          // Collect key press for the given direction
          newInputRecords.push({
            key: direction,
            timestamp: DateTime.now(),
          });
        }
      });

      const newState: PlayerInputRecord[] = [];
      newInputRecords.forEach(record => {
        newState.unshift(record);
      });
      setInputState(newState);
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      pressedKeys.delete(event.key);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return inputState;
}
