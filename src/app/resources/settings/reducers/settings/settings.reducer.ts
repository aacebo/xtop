import { createReducer, on } from '@ngrx/store';

import { PROCESS_TABLE_COLUMNS } from '../../../../resources/process';
import { ISettings } from '../../models';
import * as actions from '../../settings.actions';

export const settingsReducer = createReducer<ISettings>(
  { processes: { columns: PROCESS_TABLE_COLUMNS } },
  on(actions.update, (_, action) => action.settings),
  on(actions.init, (_, action) => action.settings),
);
