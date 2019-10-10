import { createAction, props } from '@ngrx/store';

import { IMemory } from './models';

export const add = createAction(
  '[MEMORY] Add',
  props<{ readonly memory: IMemory }>(),
);
