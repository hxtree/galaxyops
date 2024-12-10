import { AppAction } from './AppAction.type';
import { AppActionType } from './AppActionType.type';
import { AppState } from './AppState.type';

export const AppReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionType.PAGE_LOADING:
      return { ...state, isLoading: action.payload };
    case AppActionType.SET_USER:
      return { ...state, user: action.payload };
    case AppActionType.LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};
