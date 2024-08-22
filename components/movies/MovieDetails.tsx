import React from "react";
import { ScrollView, Text, View } from "react-native";
import MovieProps from "../../props/MovieProps";
import { formatReleaseDate } from "../../libs/FormatDates";
import calculateRuntime from "../../libs/CalculateRuntime";

const MovieDetails: React.FC<MovieProps> = ({
  release_date,
  overview,
  runtime,
}) => {
  return (
    <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
      {/* RELEASE DATE AND RUNTIME */}
      <View className="my-4">
        <Text className="text text-base">
          <Text className="text font-bold">Release Date:</Text>{" "}
          {formatReleaseDate(release_date)}
        </Text>
        <Text className="text text-base mt-1">
          <Text className="text font-bold">Runtime:</Text>{" "}
          {calculateRuntime(runtime)}
        </Text>
      </View>

      {/* OVERVIEW */}
      <View className="mb-4">
        <Text className="text text-lg font-semibold mb-2">Overview</Text>
        <Text className="text text-base leading-relaxed">{overview}</Text>
      </View>
    </ScrollView>
  );
};

export default MovieDetails;
