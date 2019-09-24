import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-process-sheet',
  templateUrl: './process-sheet.component.html',
  styleUrls: ['./process-sheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessSheetComponent {
  constructor(private readonly _ref: MatBottomSheetRef<ProcessSheetComponent>) { }
}
