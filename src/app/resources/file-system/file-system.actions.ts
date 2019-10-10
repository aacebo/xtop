import { createAction, props } from '@ngrx/store';

import { IFileSystemSize } from './models';

export const add = createAction(
  '[FILE-SYSTEM] Add',
  props<{ readonly fs: IFileSystemSize[] }>(),
);
