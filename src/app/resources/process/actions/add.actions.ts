import { createAction, props } from '@ngrx/store';

import { IProcesses } from '../models';

export const add = createAction(
  '[PROCESS] Add',
  props<{ processes: IProcesses }>(),
);
