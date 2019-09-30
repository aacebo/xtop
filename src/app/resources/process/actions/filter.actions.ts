import { createAction, props } from '@ngrx/store';

import { IProcess } from '../models';

export const filter = createAction(
  '[PROCESS] Filter',
  props<{ prop: keyof IProcess; value: string | number }>(),
);
