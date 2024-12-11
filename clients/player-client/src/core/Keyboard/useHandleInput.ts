import { useState, useEffect } from 'react';
import { keyboardBindings } from './keyBindings';
import { DateTime } from 'luxon';
import { InputEventRecord } from '../../dtos/Player/InputEventRecord.dto';
import { InputEventRecordKey } from '../../dtos/Player/InputEventRecordKey.type';

export default function useHandleInput(): InputEventRecord[] | null {
  const [inputState, setInputState] = useState<InputEventRecord[] | null>(null);
  const pressedKeys = new Set<string>();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ' ') {
        event.preventDefault();
      }

      // TODO ignore select already pressed keys
      if (pressedKeys.has(event.key)) {
        return;
      }
      pressedKeys.add(event.key);

      const newInputRecords: InputEventRecord[] = [];

      // Handle different key strokes
      Object.entries(keyboardBindings).forEach(([direction, key]) => {
        if (event.key === key) {
          const inputEventRecord = new InputEventRecord();
          inputEventRecord.key = direction as InputEventRecordKey;
          inputEventRecord.timestamp = DateTime.now();
          newInputRecords.push(inputEventRecord);
        }
      });

      const newState: InputEventRecord[] = [];
      newInputRecords.forEach(record => {
        newState.unshift(record);
      });
      setInputState(newInputRecords);
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
