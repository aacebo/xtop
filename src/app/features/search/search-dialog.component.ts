import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs/operators';

import { SearchService } from './search.service';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchDialogComponent implements OnInit {
  readonly control = new FormControl();

  constructor(private readonly _search: SearchService) { }

  ngOnInit() {
    this.control.valueChanges.pipe(
      tap((text: string) => this._search.text.next(text)),
    );
  }
}
