import { Component, ChangeDetectionStrategy } from '@angular/core';

import { SettingsService, ISettings } from '../../resources/settings';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsDialogComponent {
  constructor(readonly settings: SettingsService) { }

  onChanged(e: ISettings) {
    this.settings.update(e);
  }
}
