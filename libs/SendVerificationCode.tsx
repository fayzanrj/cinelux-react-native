import axios from "axios";

// Destructuring environment variables
const { EXPO_PUBLIC_API_URL, EXPO_PUBLIC_API_ACCESS_TOKEN } = process.env;

const SendVerificationCode = async (user: { email: string; name: string }) => {
  try {
    const response = await axios.post(
      `${EXPO_PUBLIC_API_URL}/api/v1/userAuth/sendCode`,
      { ...user },
      {
        headers: {
          "Content-Type": "application/json",
          accessToken: EXPO_PUBLIC_API_ACCESS_TOKEN!,
        },
      }
    );
    return true;
  } catch (error) {
    return false;
  }
};

export default SendVerificationCode;
