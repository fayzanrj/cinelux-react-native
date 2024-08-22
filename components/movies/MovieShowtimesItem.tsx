import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ShowtimeProps from "../../props/ShowtimeProps";

const MovieShowtimesItem: React.FC<ShowtimeProps> = ({
  _id,
  language,
  time,
  screen,
}) => {
  return (
    <View  className="p-2 bg-secondaryBg rounded-md my-1">
      <Text className="text text-lg font-semibold">{time}</Text>
      <Text className="text text-lg">
        {screen} - {language}
      </Text>
    </View>
  );
};

export default MovieShowtimesItem;

