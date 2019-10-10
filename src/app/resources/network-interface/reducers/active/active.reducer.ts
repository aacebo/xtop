import { createReducer, on } from '@ngrx/store';

import * as actions from '../../network-interface.actions';

export const activeReducer = createReducer<number>(
  undefined,
  on(actions.add, (_, action) => action.stats.createdAt),
);
