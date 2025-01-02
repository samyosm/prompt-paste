import dayjs from 'dayjs';

export function formatFromNow(date: Date) {
  return dayjs(date).fromNow(false);
}
