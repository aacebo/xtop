import { createReducer, on } from '@ngrx/store';

import * as actions from '../../memory.actions';

export const activeReducer = createReducer<number>(
  undefined,
  on(actions.add, (_, action) => action.memory.createdAt),
);
