import { PipeTransform } from '@angular/core';

import {
  BytesToStringPipe,
  ElapseTimeToStringPipe,
  PriorityToStringPipe,
  ProcessStateToStringPipe,
} from '../../core/pipes';

export const PROCESS_TABLE_COLUMN_PIPES: { [prop: string]: PipeTransform } = {
  priority: new PriorityToStringPipe(),
  rss: new BytesToStringPipe(),
  vsz: new BytesToStringPipe(),
  state: new ProcessStateToStringPipe(),
  etime: new ElapseTimeToStringPipe(),
};

