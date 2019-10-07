import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileSystemComponent } from './file-system.component';
import { FileSystemRoutingModule } from './file-system-routing.module';

import { FileSystemTableModule } from '../../features/file-system-table';

@NgModule({
  declarations: [FileSystemComponent],
  imports: [
    CommonModule,
    FileSystemRoutingModule,
    FileSystemTableModule,
  ],
})
export class FileSystemModule { }
