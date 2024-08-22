import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import MovieDetails from "../../components/movies/MovieDetails";
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

  // if fetching
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
    <View className="flex-1 bg-primaryBg px-5">
      <View className="flex-row gap-x-4 justify-center mt-4">
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

      {/* If booking is opened then showing both movie details and showtimes otherwise only movie details  */}
      {movie?.isBooking ? (
        <SectionSwitcher movie={movie!} />
      ) : (
        <MovieDetails {...movie!} />
      )}
    </View>
  );
};

export default MovieScreen;
