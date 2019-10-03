import { Pipe, PipeTransform } from '@angular/core';

import { IProcess } from '../../../resources/process';

@Pipe({
  name: 'commandToName',
})
export class CommandToNamePipe implements PipeTransform {
  transform(process: IProcess, isMac: boolean) {
    if (isMac) {
      const arr = process.command.split('/');
      return arr[arr.length - 1];
    } else {
      return process.comm;
    }
  }
}
