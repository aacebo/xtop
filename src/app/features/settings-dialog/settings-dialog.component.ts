import { Component, ChangeDetectionStrategy } from '@angular/core';

import { SettingsService, IProcessesSettings } from '../../resources/settings';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsDialogComponent {
  constructor(readonly settings: SettingsService) { }

  onProcessesChanged(e: IProcessesSettings) {
    this.settings.updateProcesses(e);
  }
}
