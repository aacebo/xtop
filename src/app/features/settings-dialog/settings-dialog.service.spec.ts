import { TestBed } from '@angular/core/testing';

import { SettingsDialogService } from './settings-dialog.service';

describe('SettingsDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SettingsDialogService = TestBed.get(SettingsDialogService);
    expect(service).toBeTruthy();
  });
});
