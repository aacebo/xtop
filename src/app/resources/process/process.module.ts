import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './process.state';

@NgModule({
  imports: [
    StoreModule.forFeature('process', reducers)
  ],
})
export class ProcessModule { }
