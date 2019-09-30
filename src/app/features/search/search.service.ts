import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { SearchDialogComponent } from './search-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private readonly _dialog: MatDialog) { }

  open(text?: string | number) {
    return this._dialog.open(SearchDialogComponent, {
      hasBackdrop: true,
      panelClass: 'search-panel',
      data: { text },
    });
  }
}
