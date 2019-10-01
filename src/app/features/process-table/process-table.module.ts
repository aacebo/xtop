import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatTooltipModule, MatBadgeModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ProcessTableComponent } from './process-table.component';

import { BytesToStringModule } from '../bytes-to-string';
import { PriorityToStringModule } from '../priority-to-string';
import { ElapseTimeToStringModule } from '../elapse-time-to-string';
import { ContextMenuModule } from '../context-menu';
import { SearchModule } from '../search';
import { ConfirmDialogModule } from '../confirm-dialog';

@NgModule({
  declarations: [ProcessTableComponent],
  exports: [ProcessTableComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatBadgeModule,

    NgxDatatableModule,
    BytesToStringModule,
    PriorityToStringModule,
    ElapseTimeToStringModule,
    ContextMenuModule,
    SearchModule,
    ConfirmDialogModule,
  ],
})
export class ProcessTableModule { }
