import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

interface UserProps {
  email: string;
  name: string;
}

export const useUserFunctions = () => {
  // States
  const [user, setUser] = useState<UserProps | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  // Function to fetch user from AsyncStorage
  const fetchUser = async () => {
    try {
      setIsFetching(true);
      const userJson = await AsyncStorage.getItem("user");
      if (userJson) {
        setUser(JSON.parse(userJson));
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Failed to fetch user:", error);
      setUser(null);
    } finally {
      setIsFetching(false);
    }
  };

  // Function to handle user logout
  const logout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      setUser(null);
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  // Fetch user on initial render
  useEffect(() => {
    fetchUser();
  }, []);

  return {
    user,
    setUser,
    isFetching,
    logout,
  };
};
