import { Pipe, PipeTransform } from '@angular/core';

import { ProcessStateCode, PROCESS_STATE_CODE } from '../../../resources/process';

@Pipe({
  name: 'processStateToString',
})
export class ProcessStateToStringPipe implements PipeTransform {
  transform(state: ProcessStateCode) {
    return PROCESS_STATE_CODE[state];
  }
}
