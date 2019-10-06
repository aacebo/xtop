import { PipeTransform } from '@angular/core';

import {
  BytesToStringPipe,
} from '../../core/pipes';

export const PROCESS_TABLE_COLUMN_PIPES: { [prop: string]: PipeTransform } = {
  mem_rss: new BytesToStringPipe(),
  mem_vsz: new BytesToStringPipe(),
};

