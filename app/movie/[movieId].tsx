import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import SectionSwitcher from "../../components/movies/SectionSwitcher";
import MoviePoster from "../../components/shared/MoviePoster";
import { useAppContext } from "../../context/AppContext";
import MovieProps from "../../props/MovieProps";

const MovieScreen = () => {
  // Param
  const { movieId } = useLocalSearchParams();
  // Accessing app context
  const { FindMovieById } = useAppContext();

  // States
  const [movie, setMovie] = useState<MovieProps | null>(null);
  const [isFetchingMovie, setIsFetchingMovie] = useState(true);

  // Fetching movie from prefetched movies according to param
  useEffect(() => {
    const fetchedMovie = FindMovieById(movieId.toString());

    if (fetchedMovie) setMovie(fetchedMovie);
    setIsFetchingMovie(false);
  }, [FindMovieById]);

  // if fectching
  if (isFetchingMovie) {
    return (
      <View className="flex-1 justify-center items-center bg-primaryBg">
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  // If cant find the movie
  if (!isFetchingMovie && !movie) {
    return (
      <View className="flex-1 justify-center items-center bg-primaryBg">
        <Text className="text text-3xl">No Movie Found</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-primaryBg p-5 pt-10">
      <View className="flex-row gap-4">
        <MoviePoster url={movie?.poster_path!} size="md" />
        <View className="max-w-[60%]">
          <Text className="text text-3xl font-bold">{movie?.title}</Text>
          <View className="flex-row gap-2 flex-wrap my-2">
            {movie?.genres.map((item) => (
              <Text key={item.id} className="p-1 bg-[#292e37] text">
                {item.name}
              </Text>
            ))}
          </View>
        </View>
      </View>

      <SectionSwitcher movie={movie!} />
    </ScrollView>
  );
};

export default MovieScreen;
