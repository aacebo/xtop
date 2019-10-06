import { Component, ChangeDetectionStrategy, OnInit, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ElectronService } from './core/services';

import { SystemService, ISystem } from './resources/system';
import { ProcessService } from './resources/process';
import { SettingsService, ISettings } from './resources/settings';

import { ISidenavItem } from './features/sidenav';
import { SettingsDialogService } from './features/settings-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  readonly navOpen$ = new BehaviorSubject(true);
  readonly navItems: ISidenavItem[] = [
    { icon: 'fas fa-stream', tooltip: 'Processes', route: '/processes', badge: this._process.count$ },
    { icon: 'fas fa-microchip', tooltip: 'CPU', route: '/cpu' },
    { icon: 'fas fa-memory', tooltip: 'Memory', route: '/memory' },
  ];

  constructor(
    readonly system: SystemService,
    private readonly _process: ProcessService,
    private readonly _electron: ElectronService,
    private readonly _settings: SettingsService,
    private readonly _settingsDialog: SettingsDialogService,
  ) { }

  ngOnInit() {
    document.body.classList.add('dark--theme');

    this._electron.on('system', (sys: ISystem) => {
      this.system.add(sys);
    });

    this._electron.on('settings', (settings: ISettings) => {
      this._settings.init(settings);
    });
  }

  onSettings() {
    this._settingsDialog.open();
  }
}
