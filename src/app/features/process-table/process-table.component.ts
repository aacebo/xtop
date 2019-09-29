import { Component, ChangeDetectionStrategy, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { ColumnMode, SelectionType, DatatableComponent, TreeStatus } from '@swimlane/ngx-datatable';

import { IProcess } from '../../resources/process';
import { ProcessSheetService, ProcessSheetComponent, ProcessSheetAction } from '../process-sheet';

@Component({
  selector: 'app-process-table',
  templateUrl: './process-table.component.html',
  styleUrls: ['./process-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessTableComponent {
  @Input() processes: IProcess[] = [];
  @Input() isMac = false;

  @Output() treeStatusChanged = new EventEmitter<{ pid: number; status: TreeStatus }>();

  @ViewChild(DatatableComponent, { static: false }) ngxDatatable: DatatableComponent;

  readonly ColumnMode = ColumnMode;
  readonly SelectionType = SelectionType;

  selected: IProcess[] = [];

  private _processSheetRef: MatBottomSheetRef<ProcessSheetComponent>;

  constructor(private readonly _processSheet: ProcessSheetService) { }

  getRowId(p: IProcess) {
    return p.pid;
  }

  onSelect(e: { selected: IProcess[] }) {
    this.selected = e.selected;

    if (!this._processSheetRef) {
      this._processSheetRef = this._processSheet.open({ selected: this.selected.length });
      this._processSheetRef.afterDismissed().subscribe(this._onSheetDismissed.bind(this));
    } else {
      this._processSheetRef.instance.selected$.next(this.selected.length);
    }
  }

  onScrollTop() {
    this.ngxDatatable.bodyComponent.updateOffsetY(0);
  }

  onTreeAction(e: { rowIndex: number; row: any; }) {
    if (e.row.treeStatus === 'collapsed') {
      e.row.treeStatus = 'expanded';
    } else {
      e.row.treeStatus = 'collapsed';
    }

    this.processes = [...this.processes];
    this.treeStatusChanged.emit({
      pid: e.row.pid,
      status: e.row.treeStatus,
    });
  }

  private _onSheetDismissed(action?: ProcessSheetAction) {
    this._processSheetRef = undefined;
  }
}
