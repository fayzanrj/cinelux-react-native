import { Days, Months } from "../constants/Period";

export const formatReleaseDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-");

  const formattedDay = day.length === 1 ? `0${day}` : day;
  const formattedMonth = month.length === 1 ? `0${month}` : month;

  return `${formattedDay}-${formattedMonth}-${year}`;
};

export const formatDay = (date: Date) => Days[date.getDay()];

export const formatMonthAndDate = (date: Date) => {
  const month = Months[date.getMonth()];
  const currentDate = date.getDate();
  return `${month} ${currentDate}`;
};

export const formatDateInDMY = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  let dateString = `${day}-${month + 1}-${year}`;

  if (dateString === "NaN-NaN-NaN") {
    dateString = formatDateInDMY(new Date());
  }

  return dateString;
};


export const formatDateInLocalStr = (date: string) => {
  const [day, month, year] = date.split("-").map(Number);
  const newDate = new Date(year, month - 1, day); // Create date directly

  return `${Days[newDate.getDay()]}, ${newDate.getDate()} ${
    Months[newDate.getMonth()]
  } ${newDate.getFullYear()}`;
};