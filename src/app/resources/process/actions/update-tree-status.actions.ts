import { createAction, props } from '@ngrx/store';
import { TreeStatus } from '@swimlane/ngx-datatable';

export const updateTreeStatus = createAction(
  '[PROCESS] UpdateTreeStatus',
  props<{ pid: number; status: TreeStatus }>(),
);
