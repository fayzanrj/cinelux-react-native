import axios from "axios";
import { useState } from "react";
import MovieProps from "../props/MovieProps";

// Destructuring environment variables
const { EXPO_PUBLIC_API_URL, EXPO_PUBLIC_API_ACCESS_TOKEN } = process.env;

export const useMoviesFunctions = () => {
  // States
  const [allMovies, setAllMovies] = useState<MovieProps[] | null>(null);
  const [isFetchingMovies, setIsFetchingMovies] = useState(true);

  // Function to fetch all movies
  const FetchMovies = async () => {
    try {
      setIsFetchingMovies(true);
      const res = await axios.get(
        `${EXPO_PUBLIC_API_URL}/api/v1/movies/allMovies`,
        {
          headers: {
            "Content-Type": "application/json",
            accessToken: EXPO_PUBLIC_API_ACCESS_TOKEN!,
          },
        }
      );
      setAllMovies(res.data.movies);
    } catch (error) {
      setAllMovies(null);
    } finally {
      setIsFetchingMovies(false);
    }
  };

  // Function to find a movie by ID from allmovies
  const FindMovieById = (id: string) => {
    if (allMovies) {
      if (!id || id.length !== 24) return null;
      const index = allMovies.findIndex((movie) => movie?._id === id);
      return index > -1 ? allMovies[index] : null;
    }

    return null;
  };

  // Function to find a movie by title
  const SearchMoviesByTitle = (title: string) => {
    return allMovies?.filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
  };

  return {
    allMovies,
    isFetchingMovies,
    FetchMovies,
    FindMovieById,
    SearchMoviesByTitle
  };
};
