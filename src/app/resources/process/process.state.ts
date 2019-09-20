import { Action, combineReducers } from '@ngrx/store';

import { IProcess } from './models';
import * as fromReducers from './reducers';

export interface IProcessState {
  readonly keys: number[];
  readonly map: { [key: number]: IProcess };
}

export function reducers(state: IProcessState, action: Action) {
  return combineReducers<IProcessState>({
    keys: fromReducers.keysReducer,
    map: fromReducers.mapReducer
  })(state, action);
}
