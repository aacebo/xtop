import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { TreeStatus } from '@swimlane/ngx-datatable';

import { ElectronService } from '../../core/services';
import { PageTemplate } from '../../core/templates';
import { ProcessService, IProcess } from '../../resources/process';
import { SystemService } from '../../resources/system';
import { SettingsService } from '../../resources/settings';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessesComponent extends PageTemplate {
  constructor(
    readonly router: Router,
    readonly process: ProcessService,
    readonly system: SystemService,
    readonly settings: SettingsService,
    readonly electron: ElectronService,
  ) { super(router, electron); }

  onSubscription(p: IProcess[]) {
    this.process.add(p);
  }

  onTreeStatusChanged(e: { pid: number; status: TreeStatus }) {
    this.process.updateTreeStatus(e.pid, e.status);
  }

  onFilter(e: { prop: keyof IProcess; value: string | number }) {
    this.process.filter(e.prop, e.value);
  }

  onKill(pids: number[]) {
    this.electron.send('processes.kill', pids);
    this.process.remove(pids);
  }
}
