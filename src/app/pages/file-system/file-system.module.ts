import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileSystemComponent } from './file-system.component';
import { FileSystemRoutingModule } from './file-system-routing.module';

@NgModule({
  declarations: [FileSystemComponent],
  imports: [
    CommonModule,
    FileSystemRoutingModule,
  ],
})
export class FileSystemModule { }
