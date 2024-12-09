import { useState, useEffect } from 'react';
import { keyboardBindings } from './config/keyboard-bindings';
import { DateTime } from 'luxon';
import { PlayerInputRecord } from './types';

export default function useHandleInput(): PlayerInputRecord[] | null {
  const [inputState, setInputState] = useState<PlayerInputRecord[] | null>(
    null,
  );
  const maxRecords = 5; // Set the maximum number of records

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newInputRecords: PlayerInputRecord[] = [];

      // Handle different key strokes
      Object.entries(keyboardBindings).forEach(([direction, key]) => {
        if (event.key === key) {
          // Collect key press for the given direction
          newInputRecords.push({
            key: direction,
            timestamp: DateTime.now().toISO(),
          });
        }
      });

      if (newInputRecords.length > 0) {
        setInputState(prevState => {
          const newState = prevState ? [...prevState] : [];
          newInputRecords.forEach(record => {
            newState.unshift(record);
          });
          return newState.slice(0, maxRecords);
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return inputState;
}
