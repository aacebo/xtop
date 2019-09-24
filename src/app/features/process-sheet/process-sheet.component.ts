import { Component, ChangeDetectionStrategy, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { BehaviorSubject } from 'rxjs';

import { IProcessSheetAction } from './process-sheet-action.interface';
import { ProcessSheetAction } from './process-sheet-action.enum';
import { IProcessSheetData } from './process-sheet-data.interface';

@Component({
  selector: 'app-process-sheet',
  templateUrl: './process-sheet.component.html',
  styleUrls: ['./process-sheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessSheetComponent implements OnInit {
  readonly selected$ = new BehaviorSubject(0);
  readonly ProcessSheetAction = ProcessSheetAction;
  readonly actions: IProcessSheetAction[] = [
    {
      action: ProcessSheetAction.Copy,
      icon: 'far fa-copy',
      text: 'Copy',
    },
    {
      action: ProcessSheetAction.Export,
      icon: 'fas fa-download',
      text: 'Export (CSV)',
    },
    {
      action: ProcessSheetAction.Kill,
      icon: 'far fa-trash-alt',
      text: 'Kill',
      color: 'warn',
    },
  ];

  constructor(
    private readonly _ref: MatBottomSheetRef<ProcessSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) readonly data: IProcessSheetData,
  ) { }

  ngOnInit() {
    this.selected$.next(this.data.selected);
  }

  close() {
    this._ref.dismiss();
  }

  action(action: ProcessSheetAction) {
    this._ref.dismiss(action);
  }
}
