import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material';

import { ProcessSheetComponent } from './process-sheet.component';

@Injectable({
  providedIn: 'root',
})
export class ProcessSheetService {
  constructor(private readonly _sheet: MatBottomSheet) { }

  open() {
    return this._sheet.open(ProcessSheetComponent);
  }
}
