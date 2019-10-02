import { createAction, props } from '@ngrx/store';

import { ISettings } from './models';

export const update = createAction(
  '[SETTINGS] Update',
  props<{ settings: ISettings }>(),
);

export const init = createAction(
  '[SETTINGS] Initialize',
  props<{ settings: ISettings }>(),
);
