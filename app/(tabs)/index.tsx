import React from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View
} from "react-native";
import MoviesCarousel from "../../components/movies/carousel/MoviesCarousel";
import MoviesList from "../../components/movies/MoviesList";
import { useAppContext } from "../../context/AppContext";
import useFilterMovies from "../../hooks/useFilterMovies";

const Home = () => {
  const { allMovies, isFetchingMovies } = useAppContext();
  const filterMovies = useFilterMovies();

  // On error
  if (!allMovies && !isFetchingMovies) {
    return (
      <View className="flex-1 justify-center items-center bg-primaryBg">
        <Text className="text-white"> An error occurred</Text>
      </View>
    );
  }

  // Loader
  if (isFetchingMovies) {
    return (
      <View className="flex-1 justify-center items-center bg-primaryBg">
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }


  return (
    <ScrollView
      className="flex-1 bg-primaryBg"
      showsVerticalScrollIndicator={false}
    >
      <MoviesCarousel movies={filterMovies("NOW_SHOWING", true)} />
      <MoviesList id="BOOKING_NOW" movies={filterMovies("COMING_SOON", true)} />
      <MoviesList
        id="COMING_SOON"
        movies={filterMovies("COMING_SOON", false)}
      />
    </ScrollView>
  );
};

export default Home;
