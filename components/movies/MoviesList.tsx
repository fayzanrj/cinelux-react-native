import React from "react";
import { FlatList, Text, View } from "react-native";
import MovieProps from "../../props/MovieProps";
import { Link } from "expo-router";
import { Image } from "expo-image";

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

  return (
    <View className="bg-[#111317] p-4">
      <Text className="text-[#ffffff] text-2xl font-bold mb-4">
        {renderHeading()}
      </Text>
      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Link href={`movieDetails/${item._id}`} className="mr-3">
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/original${item.poster_path}` }}
              className="w-48 h-72 object-cover"
            />
          </Link>
        )}
      />
    </View>
  );
};


export default MoviesList;
