import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commandToName',
})
export class CommandToNamePipe implements PipeTransform {
  transform(comm: string) {
    const arr = comm.split('/');
    return arr[arr.length - 1];
  }
}
