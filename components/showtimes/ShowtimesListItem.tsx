import React from "react";
import { Text, View } from "react-native";
import ShowtimeProps from "../../props/ShowtimeProps";

const ShowtimesListItem: React.FC<ShowtimeProps> = ({
  time,
  movie,
  screen,
  language,
  _id,
}) => {
  return <View className="bg-secondaryBg p-2 rounded-md">
    <Text className="text font-semibold" style={{fontSize : 17}}>{time}</Text>
    <Text className="text font-semibold my-2 text-lg">{movie.title}</Text>
    <Text className="text">{screen} - {language}</Text>
  </View>;
};

export default ShowtimesListItem;
