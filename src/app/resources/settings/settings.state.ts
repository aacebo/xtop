import { Action, combineReducers } from '@ngrx/store';

import { IProcessesSettings } from './models';
import * as fromReducers from './reducers';

export interface ISettingsState {
  readonly processes: IProcessesSettings;
}

export function reducers(state: ISettingsState, action: Action) {
  return combineReducers<ISettingsState>({
    processes: fromReducers.processesReducer,
  })(state, action);
}
