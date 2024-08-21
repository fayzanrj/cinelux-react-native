import ShowtimeProps from "../../props/ShowtimeProps";

// Destructuring environment variables
const { EXPO_PUBLIC_API_URL, EXPO_PUBLIC_API_ACCESS_TOKEN } = process.env;

// Function to fetch showtimes
const fetchShowtimesByDate = async (date: string): Promise<ShowtimeProps[]> => {
  const response = await fetch(
    `${EXPO_PUBLIC_API_URL}/api/v1/showtimes/getShowtimesByDate/${date}`,
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        accessToken: EXPO_PUBLIC_API_ACCESS_TOKEN!,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch showtimes");
  }

  const res = await response.json();
  return res.showtimes as ShowtimeProps[];
};

export default fetchShowtimesByDate;
