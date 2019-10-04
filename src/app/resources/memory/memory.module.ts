import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './memory.state';

@NgModule({
  imports: [
    StoreModule.forFeature('memory', reducers),
  ],
})
export class MemoryModule { }
