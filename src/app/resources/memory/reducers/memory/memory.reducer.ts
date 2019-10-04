import { createReducer, on } from '@ngrx/store';

import { IMemory } from '../../models';
import * as actions from '../../memory.actions';

export const memoryReducer = createReducer<IMemory>(
  undefined,
  on(actions.add, (_, action) => action.memory),
);
