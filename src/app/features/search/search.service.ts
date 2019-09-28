import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BehaviorSubject } from 'rxjs';

import { SearchDialogComponent } from './search-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  readonly text = new BehaviorSubject<string>(null);

  constructor(private readonly _dialog: MatDialog) { }

  open() {
    return this._dialog.open(SearchDialogComponent, {
      hasBackdrop: true,
      panelClass: 'search-panel',
    });
  }
}
