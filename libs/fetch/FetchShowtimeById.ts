import axios from "axios";
import ShowtimeProps from "../../props/ShowtimeProps";

// Destructuring environment variables
const { EXPO_PUBLIC_API_URL, EXPO_PUBLIC_API_ACCESS_TOKEN } = process.env;

// Function to fetch showtimes
const fetchShowtimeById = async (id: string): Promise<ShowtimeProps> => {
  const response = await axios.get(
    `${EXPO_PUBLIC_API_URL}/api/v1/showtimes/getShowtime/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        accessToken: EXPO_PUBLIC_API_ACCESS_TOKEN!,
      },
    }
  );

  return response.data.showtime as ShowtimeProps;
};

export default fetchShowtimeById;
