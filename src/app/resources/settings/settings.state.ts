import { Action, combineReducers } from '@ngrx/store';

import { ISettings } from './models';
import * as fromReducers from './reducers';

export interface ISettingsState {
  readonly settings: ISettings;
}

export function reducers(state: ISettingsState, action: Action) {
  return combineReducers<ISettingsState>({
    settings: fromReducers.settingsReducer,
  })(state, action);
}
