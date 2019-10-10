import { NgModule } from '@angular/core';

import { ProcessModule } from './process';
import { SystemModule } from './system';
import { SettingsModule } from './settings';
import { MemoryModule } from './memory';
import { CpuModule } from './cpu';
import { FileSystemModule } from './file-system';
import { NetworkInterfaceModule } from './network-interface';

@NgModule({
  imports: [
    ProcessModule,
    SystemModule,
    SettingsModule,
    MemoryModule,
    CpuModule,
    FileSystemModule,
    NetworkInterfaceModule,
  ],
})
export class ResourcesModule { }
