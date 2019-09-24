import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ProcessTableComponent } from './process-table.component';

import { BytesToStringModule } from '../bytes-to-string';
import { ProcessSheetModule } from '../process-sheet';

@NgModule({
  declarations: [ProcessTableComponent],
  exports: [ProcessTableComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,

    NgxDatatableModule,
    BytesToStringModule,
    ProcessSheetModule,
  ],
})
export class ProcessTableModule { }
