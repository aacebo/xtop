import { Component, ChangeDetectionStrategy, Input, ViewChild, OnChanges, ChangeDetectorRef } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { ColumnMode, SelectionType, DatatableComponent, RowHeightCache } from '@swimlane/ngx-datatable';

import { IProcess } from '../../resources/process';
import { ProcessSheetService, ProcessSheetComponent, ProcessSheetAction } from '../process-sheet';

@Component({
  selector: 'app-process-table',
  templateUrl: './process-table.component.html',
  styleUrls: ['./process-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessTableComponent implements OnChanges {
  @Input() processes: IProcess[] = [];
  @Input() isMac = false;

  @ViewChild(DatatableComponent, { static: false }) ngxDatatable: DatatableComponent;

  readonly ColumnMode = ColumnMode;
  readonly SelectionType = SelectionType;

  selected: IProcess[] = [];

  private _processSheetRef: MatBottomSheetRef<ProcessSheetComponent>;

  constructor(
    private readonly _processSheet: ProcessSheetService,
    private readonly _cdr: ChangeDetectorRef,
  ) { }

  ngOnChanges() {
    const pids = this.selected.map(o => o.pid);
    this.selected = this.processes.filter(o => pids.some(v => v === o.pid));
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

    this._cdr.markForCheck();
  }

  private _onSheetDismissed(action?: ProcessSheetAction) {
    this._processSheetRef = undefined;
  }
}
