import { Pipe, PipeTransform } from '@angular/core';

import { PROCESS_STATE_CODE } from '../../../resources/process';

@Pipe({
  name: 'processStateToString',
})
export class ProcessStateToStringPipe implements PipeTransform {
  transform(state: string) {
    if (state.length === 1) {
      return PROCESS_STATE_CODE[state];
    } else {
      let str = '';
      const chars = state.split('');

      for (const char of chars) {
        str += PROCESS_STATE_CODE[char];
        str += ' ';
      }

      return str.trim();
    }
  }
}
