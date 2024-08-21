import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import MovieProps from "../../props/MovieProps";
import useFilterMovies from "../../hooks/useFilterMovies";
import MoviesStatusSwitcher from "../../components/movies/MoviesStatusSwitcher";
import MoviePoster from "../../components/shared/MoviePoster";
import { Link } from "expo-router";

const Movies = () => {
  // Accessing app context
  const { isFetchingMovies } = useAppContext();

  // States
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<
    "COMING_SOON" | "NOW_SHOWING" | "BOOKING_NOW"
  >("NOW_SHOWING");

  //  Ref for scroll view
  const scrollRef = useRef<ScrollView>(null);

  // Hook for filtering movies based on status
  const filterMovies = useFilterMovies();

  // Updating movies based on selected status
  useEffect(() => {
    const fetchFilteredMovies = () => {
      switch (selectedStatus) {
        case "NOW_SHOWING":
          return filterMovies("NOW_SHOWING", true);
        case "BOOKING_NOW":
          return filterMovies("COMING_SOON", true);
        case "COMING_SOON":
          return filterMovies("COMING_SOON", false);
        default:
          return [];
      }
    };

    // Setting filtered movies to state
    setMovies(fetchFilteredMovies());

    // Resetting scroll position on status change
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  }, [selectedStatus, isFetchingMovies]);

  return (
    <View className="flex-1 bg-primaryBg">
      <MoviesStatusSwitcher
        setSelectedStatus={setSelectedStatus}
        selectedStatus={selectedStatus}
      />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        ref={scrollRef}
      >
        {movies.map((movie) => (
          <Link key={movie._id} href={`/movie/${movie._id}`}>
            <MoviePoster url={movie.poster_path} size="md" />
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
  scrollViewContent: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 20,
    paddingTop: 30,
  },
});
