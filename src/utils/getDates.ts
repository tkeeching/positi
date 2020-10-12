export const getDates = (scheduledTime: Date, time: String): Date[] => {
  return new Array(31).fill(null).map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index * 1);
    console.log(time);
    date.setHours(Number(time.substr(0,2)));
    date.setMinutes(Number(time.substr(3,2)));
    date.setSeconds(0);
    return date;
  });
};
