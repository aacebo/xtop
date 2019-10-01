import { Pipe, PipeTransform } from '@angular/core';
import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';

@Pipe({
  name: 'elapseTimeToString',
})
export class ElapseTimeToStringPipe implements PipeTransform {
  transform(etime: number) {
    const now = new Date();
    const edate = new Date(etime);

    const days = differenceInDays(now, edate);
    const hrs = differenceInHours(now, edate);
    const mins = differenceInMinutes(now, edate);

    if (days > 0) {
      return `${days} Day${days > 1 ? 's' : ''} Ago`;
    } else if (hrs > 0) {
      return `${hrs} Hr${hrs > 1 ? 's' : ''} Ago`;
    } else if (mins > 0) {
      return `${mins} Min${mins > 1 ? 's' : ''} Ago`;
    } else {
      return 'Now';
    }
  }
}
