import { createReducer, on } from '@ngrx/store';

import { IFileSystemSize } from '../../models';
import * as actions from '../../file-system.actions';

export const fileSystemsReducer = createReducer<IFileSystemSize[]>(
  [],
  on(actions.add, (_, action) => action.fs),
);
