import axios from "axios";
import ShowtimeProps from "../../props/ShowtimeProps";

// Destructuring environment variables
const { EXPO_PUBLIC_API_URL, EXPO_PUBLIC_API_ACCESS_TOKEN } = process.env;

// Function to fetch showtimes
const fetchShowtimesByDate = async (date: string): Promise<ShowtimeProps[]> => {
  const response = await axios.get(
    `${EXPO_PUBLIC_API_URL}/api/v1/showtimes/getShowtimesByDate/${date}`,
    {
      headers: {
        "Content-Type": "application/json",
        accessToken: EXPO_PUBLIC_API_ACCESS_TOKEN!,
      },
    }
  );

  return response.data.showtimes as ShowtimeProps[];
};

export default fetchShowtimesByDate;
