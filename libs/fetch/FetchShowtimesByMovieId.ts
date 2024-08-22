import axios from "axios";
import { formatDateInDMY } from "../FormatDates";

// Destructuring environment variables
const { EXPO_PUBLIC_API_URL, EXPO_PUBLIC_API_ACCESS_TOKEN } = process.env;

const fetchShowtimesByMovieId = async (movieId: string) => {
  const res = await axios.get(
    `${EXPO_PUBLIC_API_URL}/api/v1/showtimes/getShowtimesByMovieId/${movieId}?startingDate=${formatDateInDMY(
      new Date()
    )}`,
    {
      headers: {
        "Content-Type": "application/json",
        accessToken: EXPO_PUBLIC_API_ACCESS_TOKEN!,
      },
    }
  );
  return res.data.showtimes;
};

export default fetchShowtimesByMovieId;
