import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { ElectronService } from '../../core/services';
import { ProcessService, IProcess } from '../../resources/process';
import { ITreeTableColumn } from '../../features/tree-table';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessesComponent implements OnInit {
  readonly columns: { [property: string]: ITreeTableColumn } = {
    pid: {
      label: 'ID',
    },
    name: {
      label: 'Name',
      sortable: true,
      direction: 'DESC',
    },
    cpu: {
      label: 'CPU %',
      sortable: true,
    },
    memory: {
      label: 'Memory',
      sortable: true,
    },
  };

  constructor(
    readonly process: ProcessService,
    private readonly _electron: ElectronService,
  ) { }

  ngOnInit() {
    this._electron.on('processes', (ps: IProcess[]) => {
      this.process.add(ps);
    });
  }
}
