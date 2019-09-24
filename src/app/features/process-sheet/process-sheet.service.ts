import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material';

import { ProcessSheetComponent } from './process-sheet.component';
import { IProcessSheetData } from './process-sheet-data.interface';

@Injectable({
  providedIn: 'root',
})
export class ProcessSheetService {
  constructor(private readonly _sheet: MatBottomSheet) { }

  open(data: IProcessSheetData) {
    return this._sheet.open(ProcessSheetComponent, {
      hasBackdrop: false,
      data,
    });
  }
}
