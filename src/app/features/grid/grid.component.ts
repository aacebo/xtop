import { Component, ChangeDetectionStrategy, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { GridRowComponent } from './components';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent implements AfterContentInit {
  @ContentChildren(GridRowComponent) rows: QueryList<GridRowComponent>;

  ngAfterContentInit() {
    for (const row of this.rows.toArray()) {
      row.el.nativeElement.style.height = `${100 / this.rows.length}%`;
    }
  }
}
