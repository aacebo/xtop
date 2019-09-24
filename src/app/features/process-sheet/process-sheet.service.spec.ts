import { TestBed } from '@angular/core/testing';

import { ProcessSheetService } from './process-sheet.service';

describe('ProcessSheetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessSheetService = TestBed.get(ProcessSheetService);
    expect(service).toBeTruthy();
  });
});
