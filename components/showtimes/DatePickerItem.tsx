import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { formatDay, formatMonthAndDate } from "../../libs/FormatDates";

// Function to check if dates are the same
const isSameDate = (date1: Date, date2: Date) =>
  date1.toDateString() === date2.toDateString();

// Function to render date
const renderDate = (date: Date) => {
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

  if (isSameDate(date, today)) return { day: "Today", date: "" };
  if (isSameDate(date, tomorrow)) return { day: "Tomorrow", date: "" };

  return {
    day: formatDay(date),
    date: formatMonthAndDate(date),
  };
};

// Props
interface DatePickerItemProps {
  handleOnClick: (date: Date) => void;
  selectedDate: Date;
  date: Date;
}

const DatePickerItem: React.FC<DatePickerItemProps> = ({
  handleOnClick,
  selectedDate,
  date,
}) => {
  const { day, date: formattedDate } = renderDate(date);
  return (
    <TouchableOpacity
      onPress={() => handleOnClick(date)}
      className={`h-16 justify-center items-center mr-2 px-4 ${
        isSameDate(selectedDate, date) ? "border-b-2 border-[#ffffff]" : ""
      }`}
    >
      <View className="justify-center items-center">
        <Text
          className={`text ${
            isSameDate(selectedDate, date) ? "text-lg font-bold" : "text-base"
          }`}
        >
          {day}
        </Text>
        {formattedDate && (
          <Text
            className={`text ${
              isSameDate(selectedDate, date) ? "text-xl font-bold" : " text-lg"
            }`}
          >
            {formattedDate}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default DatePickerItem;
