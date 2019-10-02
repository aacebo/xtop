import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityToString',
})
export class PriorityToStringPipe implements PipeTransform {
  transform(priority: number) {
    if (priority > -1 && priority < 14) {
      return 'High';
    } else if (priority > 13 && priority < 27) {
      return 'Medium';
    } else if (priority > 26) {
      return 'Low';
    }

    return 'N/A';
  }
}
