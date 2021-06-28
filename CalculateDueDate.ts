//(YYYY-MM-DD HH:mm)
export function calculateDueDate(
  submitDate: string,
  turnaroundTime: number
): string {
  const date: Date = new Date(submitDate);

  if (closedHourCheck(date))
    return "Please submit your issue in working hours.";

  while (turnaroundTime > 0) {
    if (turnaroundTime > 8) {
      const workedHours = 17 - date.getHours();
      date.setHours(date.getHours() + workedHours);
      turnaroundTime -= workedHours;

      if (date.getHours() === 17 && turnaroundTime != 0) {
        addDays(date, 1);
        date.setHours(9);

        if (date.getDay() === 6) {
          addDays(date, 2);
        }
      }
    } else {
      date.setHours(date.getHours() + turnaroundTime);
      turnaroundTime = 0;
    }
  }
  return `issue submitted: ${submitDate} due date is: ${date.toLocaleString()}`;
}

function closedHourCheck(date: Date): boolean {
  if (
    date.getHours() < 9 ||
    date.getHours() >= 17 ||
    date.getDay() === 0 ||
    date.getDay() === 6
  )
    return true;
}

function addDays(date: Date, days: number) {
  date.setDate(date.getDate() + days);
  return date;
}

module.exports = calculateDueDate;
