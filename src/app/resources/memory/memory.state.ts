import { Action, combineReducers } from '@ngrx/store';

import { IMemory } from './models';
import * as fromReducers from './reducers';

export interface IMemoryState {
  readonly active?: number;
  readonly keys: number[];
  readonly map: { [time: number]: IMemory };
}

export function reducers(state: IMemoryState, action: Action) {
  return combineReducers<IMemoryState>({
    active: fromReducers.activeReducer,
    keys: fromReducers.keysReducer,
    map: fromReducers.mapReducer,
  })(state, action);
}
