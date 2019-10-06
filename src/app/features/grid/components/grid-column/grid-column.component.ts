import { Component, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: 'app-grid-column',
  templateUrl: './grid-column.component.html',
  styleUrls: ['./grid-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridColumnComponent {
  constructor(readonly el: ElementRef<HTMLElement>) { }
}
