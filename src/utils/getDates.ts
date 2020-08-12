export const getDates = (scheduledTime: Date): Date[] => {
  return new Array(31).map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index * 1);
    return date;
  });
};
