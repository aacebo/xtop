import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { ISidenavItem } from './features/sidenav';
import { ElectronService } from './core/services';
import { SystemService, ISystem } from './resources/system';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  readonly navItems: ISidenavItem[] = [
    { icon: 'fas fa-stream', tooltip: 'Processes', route: '/processes' },
    { icon: 'fas fa-memory', tooltip: 'Memory', route: '/memory' }
  ];

  constructor(
    private readonly _system: SystemService,
    private readonly _electron: ElectronService,
  ) { }

  ngOnInit() {
    document.body.classList.add('dark--theme');

    this._electron.on('system', (sys: ISystem) => {
      this._system.add(sys);
    });
  }
}
