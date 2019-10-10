import { createAction, props } from '@ngrx/store';

import { ISettings } from './models';

export const update = createAction(
  '[SETTINGS] Update',
  props<{ readonly settings: ISettings }>(),
);

export const init = createAction(
  '[SETTINGS] Initialize',
  props<{ readonly settings: ISettings }>(),
);
