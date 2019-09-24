import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { BytesToStringModule } from '../bytes-to-string';
import { ProcessTableComponent } from './process-table.component';

@NgModule({
  declarations: [ProcessTableComponent],
  exports: [ProcessTableComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,

    NgxDatatableModule,
    BytesToStringModule,
  ],
})
export class ProcessTableModule { }
