import { subDays, subHours, subMinutes, subSeconds } from 'date-fns';

export function etime(time: string) {
  const arr = time.split('-');
  const days = arr.length === 2 ? +arr[0] : undefined;
  const times = (arr.length === 2 ? arr[1] : arr[0]).split(':');
  const hours = +times[times.length - 3];
  const mins = +times[times.length - 2];
  const secs = +times[times.length - 1];
  let date = new Date();

  if (days) {
    date = subDays(date, days);
  }

  if (hours) {
    date = subHours(date, hours);
  }

  if (mins) {
    date = subMinutes(date, mins);
  }

  if (secs) {
    date = subSeconds(date, secs);
  }

  return date.getTime();
}
