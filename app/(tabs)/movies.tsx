import { Link } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MoviesStatusSwitcher from "../../components/movies/MoviesStatusSwitcher";
import InputField from "../../components/shared/InputField";
import MoviePoster from "../../components/shared/MoviePoster";
import { useAppContext } from "../../context/AppContext";
import useFilterMovies from "../../hooks/useFilterMovies";

const Movies = () => {
  // App context
  const { SearchMoviesByTitle, allMovies } = useAppContext();

  // States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<
    "COMING_SOON" | "NOW_SHOWING" | "BOOKING_NOW"
  >("NOW_SHOWING");

  // Ref for scroll view
  const scrollRef = useRef<ScrollView>(null);

  // Hook for filtering movies based on status
  const filterMovies = useFilterMovies();

  // Memoized filtered movies based on search query or status
  const filteredMovies = useMemo(() => {
    if (searchQuery) {
      return SearchMoviesByTitle(searchQuery) || [];
    }

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
  }, [searchQuery, selectedStatus, allMovies]);

  // Scroll to top when the selected status changes
  useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  }, [selectedStatus]);

  return (
    <View className="flex-1 bg-primaryBg">
      {/* Search Input */}
      <View className="w-[90%] mx-auto">
        <InputField
          onChange={(query: string) => setSearchQuery(query)}
          value={searchQuery}
          placeholder="Search a movie"
        />
      </View>

      {/* Status Switcher */}
      {!searchQuery && (
        <MoviesStatusSwitcher
          setSelectedStatus={setSelectedStatus}
          selectedStatus={selectedStatus}
        />
      )}

      {/* Movies List */}
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        ref={scrollRef}
      >
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Link key={movie._id} href={`/movie/${movie._id}`}>
              <MoviePoster url={movie.poster_path} size="md" />
            </Link>
          ))
        ) : (
          <View>
            <Text className="text text-2xl font-semibold">No movies found</Text>
          </View>
        )}
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
