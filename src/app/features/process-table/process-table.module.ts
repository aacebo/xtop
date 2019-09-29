import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ProcessTableComponent } from './process-table.component';

import { BytesToStringModule } from '../bytes-to-string';
import { PriorityToStringModule } from '../priority-to-string';
import { ContextMenuModule } from '../context-menu';

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
    PriorityToStringModule,
    ContextMenuModule,
  ],
})
export class ProcessTableModule { }
