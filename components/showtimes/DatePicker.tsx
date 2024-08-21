import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { formatDay, formatMonthAndDate } from "../../libs/FormatDates";
import DatePickerItem from "./DatePickerItem";

// Props
interface DatePickerProps {
  initialDate: Date;
  numDatesToShow: number;
  selectedDate: Date;
  handleOnClick: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  initialDate,
  numDatesToShow,
  selectedDate,
  handleOnClick,
}) => {
  // Generating an array of dates from the initial date to the number of dates to show
  const datesArray = Array.from(
    { length: numDatesToShow },
    (_, index) => new Date(initialDate.getTime() + index * 24 * 60 * 60 * 1000)
  );

  return (
    <View className="my-1 border-b border-[#292e37] pb-1 px-1">
      <FlatList
        horizontal
        data={datesArray}
        keyExtractor={(item) => item.toDateString()}
        renderItem={({ item: date }) => (
          <DatePickerItem
            date={date}
            handleOnClick={handleOnClick}
            selectedDate={selectedDate}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default DatePicker;
