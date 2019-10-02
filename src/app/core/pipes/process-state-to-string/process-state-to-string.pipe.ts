import { Pipe, PipeTransform } from '@angular/core';

import { ProcessStateCode } from '../../../resources/process/enums/process-state-code.enum';
import { PROCESS_STATE_CODE } from '../../../resources/process/constants/process-state-code.constant';

@Pipe({
  name: 'processStateToString',
})
export class ProcessStateToStringPipe implements PipeTransform {
  transform(state: ProcessStateCode) {
    return PROCESS_STATE_CODE[state];
  }
}
