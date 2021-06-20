import { HarperDBRecord } from './interfaces';
import { max, formatDistanceToNow, getUnixTime, endOfToday } from 'date-fns';

const getLastLogin = (data: HarperDBRecord[], rawDate?: boolean) => {
  if (!data) {
    return 'No data';
  }
  if (!rawDate) {
    rawDate = false;
  }
  const timestamps = [];
  data?.forEach((site) => {
    timestamps.push(site.last_login);
  });
  const latest = max(timestamps);
  const date = getUnixTime(+latest) || endOfToday();
  const prettifiedTime = formatDistanceToNow(date, {
    addSuffix: true,
  });
  console.log(prettifiedTime);
  return rawDate ? date : prettifiedTime;
};

export default getLastLogin;