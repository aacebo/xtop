import { createReducer, on } from '@ngrx/store';

import * as actions from '../../actions';
import { IProcess } from '../../models';

export const filtersReducer = createReducer<Partial<IProcess>>(
  { },
  on(actions.filter, (_, action) => {
    if (action.value !== undefined && action.value !== '') {
      return {
        ..._,
        [action.prop]: action.value,
      };
    } else {
      delete _[action.prop];
      return {
        ..._,
      };
    }
  }),
);
