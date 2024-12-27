import { InputEventRecordKey } from '../../dtos/Player/InputEventRecordKey.type';

// TODO: lowercase the key bindings
export const keyboardBindings = {
  [InputEventRecordKey.UP]: 'w',
  [InputEventRecordKey.DOWN]: 's',
  [InputEventRecordKey.LEFT]: 'a',
  [InputEventRecordKey.RIGHT]: 'd',
  [InputEventRecordKey.JUMP]: ' ',
  [InputEventRecordKey.DEBUG]: 'p',
  [InputEventRecordKey.SELECT]: 'Enter',
  [InputEventRecordKey.BACK]: 'u',
  [InputEventRecordKey.PAUSE]: 'Escape',
};

export const holdableKeys = [
  InputEventRecordKey.UP,
  InputEventRecordKey.DOWN,
  InputEventRecordKey.LEFT,
  InputEventRecordKey.RIGHT,
];
