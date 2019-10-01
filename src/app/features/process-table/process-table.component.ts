import { Component, ChangeDetectionStrategy, Input, ViewChild, Output, EventEmitter, HostListener } from '@angular/core';
import { ColumnMode, SelectionType, DatatableComponent, TreeStatus, ContextmenuType } from '@swimlane/ngx-datatable';
import { BehaviorSubject } from 'rxjs';

import { IProcess } from '../../resources/process';
import { ContextMenuService, IContextMenuOption } from '../context-menu';
import { SearchService } from '../search';

import { IProcessTableAction } from './process-table-action.interface';
import { PROCESS_TABLE_COLUMNS } from './process-table-columns.constant';

@Component({
  selector: 'app-process-table',
  templateUrl: './process-table.component.html',
  styleUrls: ['./process-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessTableComponent {
  @Input() processes: IProcess[] = [];
  @Input() filters: Partial<IProcess> = { };
  @Input() isMac = false;

  @Output() treeStatusChanged = new EventEmitter<{ pid: number; status: TreeStatus }>();
  @Output() filter = new EventEmitter<{ prop: keyof IProcess; value: string | number }>();

  @ViewChild(DatatableComponent, { static: false }) ngxDatatable: DatatableComponent;

  readonly PROCESS_TABLE_COLUMNS = PROCESS_TABLE_COLUMNS;
  readonly Columns = Object.values(PROCESS_TABLE_COLUMNS);
  readonly ColumnMode = ColumnMode;
  readonly SelectionType = SelectionType;
  readonly selected$ = new BehaviorSubject<IProcess[]>([]);

  private readonly actions: IProcessTableAction[] = [
    {
      name: 'Kill',
      key: 'Delete',
      cb: this._onKill.bind(this),
    },
    {
      name: 'Info',
      key: 'i',
      ctrl: true,
      cb: this._onInfo.bind(this),
    },
  ];

  private get contextMenuOptions(): IContextMenuOption[] {
    return this.actions.map(a => ({
      text: a.name,
      muted: `${a.ctrl ? 'Ctrl+' : ''}${a.key}`,
    }));
  }

  constructor(
    private readonly _contextMenu: ContextMenuService,
    private readonly _search: SearchService,
  ) { }

  getRowId(p: IProcess) {
    return p.pid;
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
      const ref = this._contextMenu.open(this.contextMenuOptions, e.event.x, e.event.y);
      ref.closed.subscribe(this._onContextMenuClosed.bind(this));
    }
  }

  onSearch(prop: keyof IProcess, e: Event) {
    e.stopImmediatePropagation();
    const ref = this._search.open(this.filters[prop]);
    const sub = ref.componentInstance.text$.subscribe(text => {
      this.filter.emit({ prop, value: text });
    });

    ref.afterClosed().subscribe(() => sub.unsubscribe());
  }

  onClear(prop: keyof IProcess, e: Event) {
    e.stopImmediatePropagation();
    this.filter.emit({ prop, value: undefined });
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      this.selected$.next([]);
    } else {
      for (const a of this.actions) {
        if (((e.ctrlKey && a.ctrl) || (!e.ctrlKey && !a.ctrl)) && e.key === a.key) {
          a.cb();
          return;
        }
      }
    }
  }

  private _onContextMenuClosed(o: IContextMenuOption) {
    if (o) {
      const action = this.actions.find(a => a.name === o.text);
      action.cb();
    }
  }

  private _onKill() {
    console.log('kill');
  }

  private _onInfo() {
    console.log('info');
  }
}
