import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { formatDateInLocalStr } from "../../libs/FormatDates";
import fetchShowtimesByMovieId from "../../libs/fetch/FetchShowtimesByMovieId";
import ShowtimeProps from "../../props/ShowtimeProps";
import MovieShowtimesItem from "./MovieShowtimesItem";

// Props
interface MovieShowtimesProps {
  movieId: string;
}

const MovieShowtimes: React.FC<MovieShowtimesProps> = ({ movieId }) => {
  // Fetching showtimes based on the movie
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movieId", movieId],
    queryFn: () => fetchShowtimesByMovieId(movieId),
  });

  // If fetching
  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color={"#ffffff"} />
      </View>
    );
  }

  // If an error occurs
  if (isError) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text text-2xl font-semibold">
          Failed to load showtimes
        </Text>
      </View>
    );
  }

  // If no showtimes are found
  if (data.length <= 0) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text text-2xl font-semibold">No showtimes found</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
      {data.map((item: { date: string; showtimes: ShowtimeProps[] }) => (
        <View key={item.date} className="my-2">
          <Text className="text text-xl font-bold">
            {formatDateInLocalStr(item.date)}
          </Text>
          <View className="p-2">
            {item.showtimes.map((showtime) => (
              <MovieShowtimesItem key={showtime._id} {...showtime} />
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default MovieShowtimes;
