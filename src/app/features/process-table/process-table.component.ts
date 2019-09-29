import { Component, ChangeDetectionStrategy, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { ColumnMode, SelectionType, DatatableComponent, TreeStatus, ContextmenuType } from '@swimlane/ngx-datatable';

import { IProcess } from '../../resources/process';
import { ContextMenuService } from '../context-menu';

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

  constructor(private readonly contextMenu: ContextMenuService) { }

  getRowId(p: IProcess) {
    return p.pid;
  }

  onSelect(e: { selected: IProcess[] }) {
    this.selected = e.selected;
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

  onContextMenu(e: { event: MouseEvent; type: ContextmenuType; content: IProcess }) {
    if (e.type === ContextmenuType.body) {
      this.contextMenu.open([{ text: 'Kill' }], e.event.x, e.event.y);
    } else {

    }
  }
}
