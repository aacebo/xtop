import { createReducer, on } from '@ngrx/store';

import { environment } from '../../../../../environments/environment';
import * as actions from '../../cpu.actions';

export const keysReducer = createReducer<number[]>(
  [],
  on(actions.add, (_, action) => {
    _.push(action.cpu.createdAt);

    if (_.length > environment.queueSize) {
      _.shift();
    }

    return _;
  }),
);
