import { Component, ChangeDetectionStrategy, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BehaviorSubject, Subject } from 'rxjs';
import { tap, takeUntil, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchDialogComponent implements OnInit, OnDestroy {
  readonly control: FormControl;
  readonly text$: BehaviorSubject<string>;

  private readonly _destroy = new Subject<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly _data: { text?: string; },
    private readonly _dialogRef: MatDialogRef<SearchDialogComponent>,
  ) {
    this.text$ = new BehaviorSubject<string>(this._data.text);
    this.control = new FormControl(this._data.text);
  }

  ngOnInit() {
    this.control.valueChanges.pipe(
      debounceTime(500),
      tap(text => this.text$.next(text)),
    ).pipe(takeUntil(this._destroy)).subscribe();
  }

  ngOnDestroy() {
    this._destroy.next();
    this._destroy.complete();
  }

  onEnter() {
    this.text$.next(this.control.value);
    this._dialogRef.close();
  }
}
