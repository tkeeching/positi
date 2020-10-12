export const getDates = (scheduledTime: Date, time: String): Date[] => {
  return new Array(31).fill(null).map((_, index) => {
    const date = new Date();
    if (Number(time.substr(0, 2)) <= date.getHours() && Number(time.substr(3, 2)) < date.getMinutes()) {
      console.log(time);
      date.setDate(date.getDate() + 1);
    }
    date.setDate(date.getDate() + index * 1);
    date.setHours(Number(time.substr(0,2)));
    date.setMinutes(Number(time.substr(3,2)));
    date.setSeconds(0);
    return date;
  });
};
