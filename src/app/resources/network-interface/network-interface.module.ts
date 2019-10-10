import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './network-interface.state';

@NgModule({
  imports: [
    StoreModule.forFeature('network-interface', reducers),
  ],
})
export class NetworkInterfaceModule { }
