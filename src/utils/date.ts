import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const adjustDateTimeForTimezone = (dateString: string): string => {
  if (!dateString) return new Date().toDateString();
  const dateUTC = dayjs.utc(dateString);
  const dateInUTCMinus = dateUTC.tz('America/Sao_Paulo');
  return dateInUTCMinus.format();
};

const calculateDuration = (startTimeStr: string, endTimeStr: string, type: string) => {
  const startTime = dayjs.utc(startTimeStr);
  const endTime = dayjs.utc(endTimeStr);

  if (type === "day") {
    return dayjs.duration(endTime.diff(startTime)).asDays();
  }
  else if (type === "hour") {
    return dayjs.duration(endTime.diff(startTime)).asHours();
  }
  else if (type === "min") {
    return dayjs.duration(endTime.diff(startTime)).asMinutes();
  }
}

const roundDays = (days: number) => {
  return Math.floor(days);
}

export { adjustDateTimeForTimezone, calculateDuration, roundDays };