import { NgModule } from '@angular/core';

import { ProcessModule } from './process';
import { SystemModule } from './system';

@NgModule({
  imports: [
    ProcessModule,
    SystemModule,
  ],
})
export class ResourcesModule { }
