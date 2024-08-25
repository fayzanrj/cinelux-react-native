import React from "react";
import { Text, View } from "react-native";
import TicketsProps from "../../props/TicketsProps";

const MyTicketsItem: React.FC<TicketsProps> = ({
  _id,
  bookingNumber,
  movie,
  createdAt,
  screen,
  language,
  date,
  seats,
  time,
}) => {
  return (
    <View className="border my-2 border-[#878787] p-3 w-[98%] mx-auto rounded-md">
      <Text className="text text-xl font-bold">Booking#{bookingNumber}</Text>

      <View className="my-5">
        <Text className="text text-xl font-semibold">
          {movie.title} <Text className="text-base font-normal">({language})</Text>
        </Text>
        <Text className="text text-lg">
          {date} - {time} - {screen}
        </Text>
      </View>

      <View>
        <Text className="text text-lg">Seats : {seats.join(",")}</Text>
        <Text className="text text-lg">Purchased on : {new Date(createdAt).toDateString()}</Text>
      </View>
    </View>
  );
};

export default MyTicketsItem;

