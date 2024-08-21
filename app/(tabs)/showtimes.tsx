import { useQuery } from "@tanstack/react-query";
import React, { useMemo, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import DatePicker from "../../components/showtimes/DatePicker";
import ShowtimesList from "../../components/showtimes/ShowtimesList";
import fetchShowtimesByDate from "../../libs/fetch/FetchShowtimesByDate";
import { formatDateInDMY } from "../../libs/FormatDates";

const Showtimes = () => {
  // State
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Formatting selected date for API calls
  const formattedDate = useMemo(
    () => formatDateInDMY(selectedDate),
    [selectedDate]
  );

  // Fetching showtimes based on the selected date
  const {
    data: showtimes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["showtimes", formattedDate],
    queryFn: () => fetchShowtimesByDate(formattedDate),
    staleTime: 5 * 60 * 1000,
  });

  // Handling date change from the date picker
  const handleDateChange = (date: Date) => setSelectedDate(date);

  return (
    <View className="flex-1 bg-primaryBg">
      {/* Date Picker */}
      <DatePicker
        initialDate={new Date()}
        numDatesToShow={7}
        selectedDate={selectedDate}
        handleOnClick={handleDateChange}
      />

      {/* Loading Spinner */}
      {isLoading && (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator />
        </View>
      )}

      {/* Error State */}
      {!isLoading && isError && (
        <View className="flex-1 justify-center items-center">
          <Text className="text text-2xl font-semibold">
            Error finding shows
          </Text>
        </View>
      )}

      {/* Showtimes List */}
      {!isLoading && !isError && (
        <>
          <Text className="text text-lg my-4 px-3">
            Showtimes for{" "}
            <Text className="font-bold">{selectedDate.toDateString()}</Text>
          </Text>

          <ShowtimesList showtimes={showtimes || []} />
        </>
      )}
    </View>
  );
};

export default Showtimes;
