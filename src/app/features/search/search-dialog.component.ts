import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchDialogComponent implements OnInit {
  readonly control = new FormControl();
  readonly text$ = new BehaviorSubject<string>(null);

  ngOnInit() {
    this.control.valueChanges.pipe(
      tap((text: string) => this.text$.next(text)),
    );
  }
}
