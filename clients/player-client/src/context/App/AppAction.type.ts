import { AppActionType } from './AppActionType.type';

export type AppAction =
  | { type: AppActionType.SET_USER; payload: string }
  | { type: AppActionType.LOGOUT }
  | { type: AppActionType.PAGE_LOADING; payload: boolean };
