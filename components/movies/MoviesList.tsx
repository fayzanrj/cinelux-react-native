import { Link } from "expo-router";
import React, { useCallback } from "react";
import { FlatList, Text, View } from "react-native";
import MovieProps from "../../props/MovieProps";
import MoviePoster from "../shared/MoviePoster";

// Props
interface MovieListProps {
  movies: MovieProps[];
  id: "NOW_SHOWING" | "COMING_SOON" | "BOOKING_NOW";
}

const MoviesList: React.FC<MovieListProps> = ({ id, movies }) => {
  // Function to determine heading
  const renderHeading = () => {
    switch (id) {
      case "BOOKING_NOW":
        return "Booking Now";
      case "COMING_SOON":
        return "Coming Soon";
      case "NOW_SHOWING":
        return "Now Showing";
      default:
        return "Movies";
    }
  };

  // Function to render list items
  const renderItems = useCallback(
    ({ item }: { item: MovieProps }) => (
      <Link href={`/movie/${item._id}`} className="mr-3">
        <MoviePoster url={item.poster_path} size="lg" />
      </Link>
    ),
    [movies]
  );

  return (
    <View className="bg-[#111317] p-4">
      <Text className="text text-2xl font-bold mb-4">
        {renderHeading()}
      </Text>
      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={renderItems}
        initialNumToRender={4}
      />
    </View>
  );
};

export default React.memo(MoviesList);
