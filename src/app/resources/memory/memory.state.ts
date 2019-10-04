import { Action, combineReducers } from '@ngrx/store';

import { IMemory } from './models';
import * as fromReducers from './reducers';

export interface IMemoryState {
  readonly memory?: IMemory;
}

export function reducers(state: IMemoryState, action: Action) {
  return combineReducers<IMemoryState>({
    memory: fromReducers.memoryReducer,
  })(state, action);
}
