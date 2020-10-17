export const getDates = (time: String): Date[] => {
  const hour = Number(time.substr(0, 2));
  const minute = Number(time.substr(3, 2));
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  const includeToday =
    hour > currentHour || (hour === currentHour && minute > currentMinute);

  return new Array(64).fill(null).map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index * 1 + (includeToday ? 0 : 1));
    date.setHours(Number(time.substr(0, 2)));
    date.setMinutes(Number(time.substr(3, 2)));
    date.setSeconds(0);
    return date;
  });
};
