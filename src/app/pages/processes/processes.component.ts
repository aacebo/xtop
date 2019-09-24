import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { ElectronService } from '../../core/services';
import { ProcessService, IProcess } from '../../resources/process';
import { SystemService } from '../../resources/system';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessesComponent implements OnInit {
  constructor(
    readonly process: ProcessService,
    readonly system: SystemService,
    private readonly _electron: ElectronService,
  ) { }

  ngOnInit() {
    this._electron.on('processes', (ps: IProcess[]) => {
      this.process.add(ps);
    });
  }
}
