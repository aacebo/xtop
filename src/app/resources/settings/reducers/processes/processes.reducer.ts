import { createReducer, on } from '@ngrx/store';

import { PROCESS_TABLE_COLUMNS } from '../../../process';

import { IProcessesSettings } from '../../models';
import * as actions from '../../actions';

export const processesReducer = createReducer<IProcessesSettings>(
  { columns: PROCESS_TABLE_COLUMNS },
  on(actions.updateProcesses, (_, action) => action.settings),
);
