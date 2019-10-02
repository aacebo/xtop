import { NgModule } from '@angular/core';

import { ProcessModule } from './process';
import { SystemModule } from './system';
import { SettingsModule } from './settings';

@NgModule({
  imports: [
    ProcessModule,
    SystemModule,
    SettingsModule,
  ],
})
export class ResourcesModule { }
