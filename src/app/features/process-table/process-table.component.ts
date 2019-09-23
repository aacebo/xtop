import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

import { IProcess } from '../../resources/process';

@Component({
  selector: 'app-process-table',
  templateUrl: './process-table.component.html',
  styleUrls: ['./process-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessTableComponent {
  @Input() processes: IProcess[] = [];

  readonly ColumnMode = ColumnMode;
  readonly SelectionType = SelectionType;

  selected: IProcess[] = [];
}
