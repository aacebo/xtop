import { createReducer, on } from '@ngrx/store';

import { ISystem } from '../../models';
import * as actions from '../../system.actions';

export const systemReducer = createReducer<ISystem>(
  undefined,
  on(actions.add, (_, action) => action.system)
);
