import { createAction, props } from '@ngrx/store';

import { ICurrentLoad } from './models';

export const add = createAction(
  '[CPU] Add',
  props<{ readonly cpu: ICurrentLoad }>(),
);
