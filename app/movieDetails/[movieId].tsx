import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const MovieDetails = () => {
  const { movieId } = useLocalSearchParams();
  return (
    <View>
      <Text>{movieId}</Text>
    </View>
  );
};

export default MovieDetails;
