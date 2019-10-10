import { createAction, props } from '@ngrx/store';

import { IProcess } from '../models';

export const filter = createAction(
  '[PROCESS] Filter',
  props<{ readonly prop: keyof IProcess; readonly value: string | number }>(),
);
