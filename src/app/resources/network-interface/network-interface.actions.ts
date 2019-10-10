import { createAction, props } from '@ngrx/store';

import { INetworkInterfacesStats } from './models';

export const add = createAction(
  '[NETWORK-INTERFACE] Add',
  props<{ readonly stats: INetworkInterfacesStats }>(),
);
