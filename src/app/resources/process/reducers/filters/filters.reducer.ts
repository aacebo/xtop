import { createReducer, on } from '@ngrx/store';

import * as actions from '../../actions';
import { IProcess } from '../../models';

export const filtersReducer = createReducer<Partial<IProcess>>(
  { },
  on(actions.filter, (_, action) => {
    return {
      ..._,
      [action.prop]: action.value,
    };
  }),
);
