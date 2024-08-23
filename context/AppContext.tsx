import { ReactNode, createContext, useContext, useEffect } from "react";
import MovieProps from "../props/MovieProps";
import { useMoviesFunctions } from "./MoviesContextFunctions";

interface AppContextProps {
  // MOVIE PROPS
  allMovies: MovieProps[] | null;
  isFetchingMovies: boolean;
  FetchMovies: () => void;
  FindMovieById: (id: string) => MovieProps | null;
  SearchMoviesByTitle: (title: string) => MovieProps[] | undefined;
}

// AppContext
const AppContext = createContext<AppContextProps | undefined>(undefined);

// Hook to use AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

// App context
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const { ...movieState } = useMoviesFunctions();

  // Fetching movies on mount
  useEffect(() => {
    movieState.FetchMovies();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...movieState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
