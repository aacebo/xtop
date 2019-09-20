import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';

import { ElectronService } from '../../core/services';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessesComponent implements OnInit, OnDestroy {
  constructor(private readonly _electron: ElectronService) { }

  ngOnInit() {
    this._electron.on('processes', ps => {
      console.log(ps);
    });

    this._electron.send('processes.subscribe');
  }

  ngOnDestroy() {
    this._electron.send('processes.unsubscribe');
  }
}
