import React, { useEffect, useState, useMemo } from "react";
import { ScrollView, Text, View, ActivityIndicator } from "react-native";
import MovieProps, { STATUS } from "../../props/MovieProps";
import MoviesList from "../../components/movies/MoviesList";

// Destructuring environment variables
const { EXPO_PUBLIC_API_URL, EXPO_PUBLIC_API_ACCESS_TOKEN } = process.env;

const Home = () => {
  // States
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Use effect hook to run to mount
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Fetching movies from the API
        const response = await fetch(
          `${EXPO_PUBLIC_API_URL}/api/v1/movies/allMovies`,
          {
            headers: {
              "Content-Type": "application/json",
              accessToken: EXPO_PUBLIC_API_ACCESS_TOKEN!,
            },
          }
        );

        // Throwing error if the response is not OK
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        // Parsing JSON and setting
        const data = await response.json();
        setMovies(data.movies);

      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    // Calling function
    fetchMovies();
  }, []);

  // Function to filter moveis based on status
  const getMovies = useMemo(
    () => (status: STATUS, isBooking: boolean) =>
      movies.filter((movie) => movie.status === status && movie.isBooking === isBooking),
    [movies]
  );

  // Loader
  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-primaryBg">
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  // On error
  if (error) {
    return (
      <View className="flex-1 justify-center items-center bg-primaryBg">
        <Text className="text-white">Error: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView
      className="flex-1 bg-primaryBg"
      showsVerticalScrollIndicator={false}
    >
      <MoviesList id="NOW_SHOWING" movies={getMovies("NOW_SHOWING", true)} />
      <MoviesList id="BOOKING_NOW" movies={getMovies("COMING_SOON", true)} />
      <MoviesList id="COMING_SOON" movies={getMovies("COMING_SOON", false)} />
    </ScrollView>
  );
};

export default Home;
