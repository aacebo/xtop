import { Component, ChangeDetectionStrategy, ContentChildren, QueryList, ElementRef, AfterContentInit } from '@angular/core';

import { GridColumnComponent } from '../grid-column';

@Component({
  selector: 'app-grid-row',
  templateUrl: './grid-row.component.html',
  styleUrls: ['./grid-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridRowComponent implements AfterContentInit {
  @ContentChildren(GridRowComponent) rows: QueryList<GridRowComponent>;
  @ContentChildren(GridColumnComponent) columns: QueryList<GridColumnComponent>;

  constructor(readonly el: ElementRef<HTMLElement>) { }

  ngAfterContentInit() {
    for (const row of this.rows.toArray()) {
      row.el.nativeElement.style.height = `${100 / this.rows.length}%`;
    }

    for (const column of this.columns.toArray()) {
      column.el.nativeElement.style.maxWidth = `${100 / this.columns.length}%`;
      column.el.nativeElement.style.flexBasis = `${100 / this.columns.length}%`;
    }
  }
}
