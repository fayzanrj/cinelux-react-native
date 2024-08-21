import { useMemo } from "react";
import { STATUS } from "../props/MovieProps";
import { useAppContext } from "../context/AppContext";

const useFilterMovies = () => {
  const { allMovies } = useAppContext();

  // Memoizing the filter function
  const filterMovies = useMemo(
    () => (status: STATUS, isBooking: boolean) =>
      allMovies
        ? allMovies.filter(
            (movie) => movie.status === status && movie.isBooking === isBooking
          )
        : [],
    [allMovies]
  );

  return filterMovies;
};

export default useFilterMovies;
