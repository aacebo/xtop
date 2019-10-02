import { createAction, props } from '@ngrx/store';

import { IProcessesSettings } from '../models';

export const updateProcesses = createAction(
  '[SETTINGS] UpdateProcesses',
  props<{ settings: IProcessesSettings }>(),
);
