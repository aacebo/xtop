import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material';

import { FileSystemTableComponent } from './file-system-table.component';

@NgModule({
  declarations: [FileSystemTableComponent],
  exports: [FileSystemTableComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
  ],
})
export class FileSystemTableModule { }
