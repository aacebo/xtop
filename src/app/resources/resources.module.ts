import { NgModule } from '@angular/core';

import { ProcessModule } from './process';
import { SystemModule } from './system';
import { SettingsModule } from './settings';
import { MemoryModule } from './memory';

@NgModule({
  imports: [
    ProcessModule,
    SystemModule,
    SettingsModule,
    MemoryModule,
  ],
})
export class ResourcesModule { }
