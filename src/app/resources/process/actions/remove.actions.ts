import { createAction, props } from '@ngrx/store';

export const remove = createAction(
  '[PROCESS] Remove',
  props<{ pids: number[] }>(),
);
