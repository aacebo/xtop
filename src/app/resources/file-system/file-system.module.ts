import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './file-system.state';

@NgModule({
  imports: [
    StoreModule.forFeature('file-system', reducers),
  ],
})
export class FileSystemModule { }
