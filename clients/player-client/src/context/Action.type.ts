import { Actions } from './Actions.type';

export type Action =
  | { type: Actions.SET_USER; payload: string }
  | { type: Actions.LOGOUT }
  | { type: Actions.PAGE_LOADING; payload: boolean };
