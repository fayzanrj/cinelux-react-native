import React from "react";
import { Text, View } from "react-native";
import MovieProps from "../../props/MovieProps";
import formatReleaseDate from "../../libs/FormatReleaseDate";
import calculateRuntime from "../../libs/CalculateRuntime";

const MovieDetails: React.FC<MovieProps> = ({
  release_date,
  overview,
  runtime,
}) => {
  return (
    <View className="bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-lg mx-auto">
      {/* RELEASE DATE AND RUNTIME */}
      <View className="mb-4">
        <Text className="text text-base">
          <Text className="text font-bold">Release Date:</Text> {formatReleaseDate(release_date)}
        </Text>
        <Text className="text text-base mt-1">
          <Text className="text font-bold">Runtime:</Text> {calculateRuntime(runtime)}
        </Text>
      </View>

      {/* OVERVIEW */}
      <View>
        <Text className="text text-lg font-semibold mb-2">Overview</Text>
        <Text className="text text-base leading-relaxed">
          {overview}
        </Text>
      </View>
    </View>
  );
};

export default MovieDetails;
