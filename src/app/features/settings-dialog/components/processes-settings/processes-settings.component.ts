import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material';
import { BehaviorSubject } from 'rxjs';

import { IProcessesSettings } from '../../../../resources/settings';
import { IProcessTableColumn } from '../../../../resources/process';

@Component({
  selector: 'app-processes-settings',
  templateUrl: './processes-settings.component.html',
  styleUrls: ['./processes-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessesSettingsComponent implements OnInit {
  @Input() settings: IProcessesSettings;

  @Output() changed = new EventEmitter<IProcessesSettings>();

  readonly columns$ = new BehaviorSubject<IProcessTableColumn[]>([]);

  ngOnInit() {
    this.columns$.next(Object.values(this.settings.columns));
  }

  onColumnSelectionChange(e: MatSelectionListChange) {
    const col = this.settings.columns[e.option.value];

    this.changed.emit({
      ...this.settings,
      columns: {
        ...this.settings.columns,
        [e.option.value]: {
          ...col,
          visible: e.option.selected,
        },
      },
    });
  }
}
