import { TestBed } from '@angular/core/testing';

import { ProcessDialogService } from './process-dialog.service';

describe('ProcessDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessDialogService = TestBed.get(ProcessDialogService);
    expect(service).toBeTruthy();
  });
});
