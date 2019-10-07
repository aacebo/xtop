import { NgModule } from '@angular/core';

import { ProcessModule } from './process';
import { SystemModule } from './system';
import { SettingsModule } from './settings';
import { MemoryModule } from './memory';
import { CpuModule } from './cpu';
import { FileSystemModule } from './file-system';

@NgModule({
  imports: [
    ProcessModule,
    SystemModule,
    SettingsModule,
    MemoryModule,
    CpuModule,
    FileSystemModule,
  ],
})
export class ResourcesModule { }
