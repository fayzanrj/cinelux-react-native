import React from "react";
import { View, Text } from "react-native";
import { formatDay, formatMonthAndDate } from "../../libs/FormatDates";
import ShowtimeProps from "../../props/ShowtimeProps";

const ShowtimeDetails: React.FC<ShowtimeProps> = ({ movie,language,date,time,screen }) => (
  <View className="bg-secondaryBg p-2 rounded-md mb-5">
    <Text className="text text-xl">
      {movie.title}{" "}
      <Text className="text-sm">({language})</Text>
    </Text>
    <Text className="text text-lg">
      {formatDay(new Date(date))}, {formatMonthAndDate(new Date(date))} - {time}
    </Text>
    <Text className="text text-lg">{screen}</Text>
  </View>
);

export default ShowtimeDetails;
