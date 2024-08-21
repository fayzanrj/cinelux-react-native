export type STATUS = "NOW_SHOWING" | "COMING_SOON";

interface MovieProps {
    _id: string;
    imdb_id?: string;
    title: string;
    overview: string;
    poster_path: string;
    runtime: number;
    tagline?: string;
    vote_average: number;
    original_language: string;
    release_date: string;
    trailer_link: string;
    genres: {
      id: number;
      name: string;
    }[];
    isBooking: boolean;
    status: STATUS
  }
  
  export default MovieProps;