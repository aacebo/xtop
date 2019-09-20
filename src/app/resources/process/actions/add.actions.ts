import { createAction, props } from '@ngrx/store';

import { IProcess } from '../models';

export const add = createAction(
  '[PROCESS] Add',
  props<{ processes: IProcess[] }>()
);
