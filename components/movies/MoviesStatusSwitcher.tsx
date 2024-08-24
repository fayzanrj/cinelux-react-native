import React from "react";
import { Keyboard, Text, TouchableOpacity, View } from "react-native";

// Types
type STATUS = "COMING_SOON" | "NOW_SHOWING" | "BOOKING_NOW";

// Props
interface MoviesStatusSwitcherProps {
  setSelectedStatus: React.Dispatch<React.SetStateAction<STATUS>>;
  selectedStatus: STATUS;
}

const MoviesStatusSwitcher: React.FC<MoviesStatusSwitcherProps> = ({
  setSelectedStatus,
  selectedStatus,
}) => {
  const statuses: STATUS[] = ["NOW_SHOWING", "BOOKING_NOW", "COMING_SOON"];

  // Function to handle press
  const handlePress = (status: STATUS) => {
    Keyboard.dismiss();
    setSelectedStatus(status);
  };

  return (
    <View className="flex-row w-full mx-auto justify-around py-3 px-1.5">
      {statuses.map((status) => (
        <TouchableOpacity
          key={status}
          onPress={() => handlePress(status)}
          className={`p-2 ${
            selectedStatus === status ? "bg-[#ffffff] rounded-md" : ""
          }`}
        >
          <Text
            style={{ fontSize: 15 }}
            className={`${
              selectedStatus === status ? "text-[#000] font-bold" : "text"
            }`}
          >
            {status.replace("_", " ")}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MoviesStatusSwitcher;
