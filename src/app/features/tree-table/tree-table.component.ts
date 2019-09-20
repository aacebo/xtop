import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { ITreeTableColumn } from './tree-table-column.model';
import { ITreeTableAction } from './tree-table-action.model';

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeTableComponent implements OnInit {
  @Input() cols: { [property: string]: ITreeTableColumn } = { };
  @Input() actions: ITreeTableAction[] = [];
  @Input() rows = [];
  @Input() childProperty = 'children';

  @Output() action = new EventEmitter<ITreeTableAction>();

  properties: string[] = [];
  columns: ITreeTableColumn[] = [];

  ngOnInit() {
    this.properties = Object.keys(this.cols);
    this.columns = Object.values(this.cols);
  }
}
