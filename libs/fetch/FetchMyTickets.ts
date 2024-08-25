import axios from "axios";
import TicketsProps from "../../props/TicketsProps";
import validateEmail from "../ValidateEmail";

// Destructuring environment variables
const { EXPO_PUBLIC_API_URL, EXPO_PUBLIC_API_ACCESS_TOKEN } = process.env;

const fetchMyTickets = async (email: string) => {
  if (!validateEmail) return;

  const response = await axios.get(
    `${EXPO_PUBLIC_API_URL}/api/v1/bookings/getBookings?email=${email.toLowerCase()}`,
    {
      headers: {
        "Content-Type": "application/json",
        accessToken: EXPO_PUBLIC_API_ACCESS_TOKEN!,
      },
    }
  );

  return response.data.bookings as TicketsProps[];
};

export default fetchMyTickets;
