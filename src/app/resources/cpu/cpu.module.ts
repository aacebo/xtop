import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './cpu.state';

@NgModule({
  imports: [
    StoreModule.forFeature('cpu', reducers),
  ],
})
export class CpuModule { }
