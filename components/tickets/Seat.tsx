import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Props
interface SeatProps {
  seat: string;
  isBooked: boolean;
  isSelected: boolean;
  onSeatPress: (seat: string) => void;
}

const Seat: React.FC<SeatProps> = ({
  seat,
  isBooked,
  isSelected,
  onSeatPress,
}) => {
  // Function to get seat color based on status
  const getSeatColor = (): string => {
    if (isBooked) {
      return "#8e8e8e";
    } else if (isSelected) {
      return "#1E90FF";
    }
    return "#ffffff";
  };

  return (
    <TouchableOpacity onPress={() => onSeatPress(seat)}>
      <MaterialCommunityIcons name="seat" size={9} color={getSeatColor()} />
    </TouchableOpacity>
  );
};

export default Seat;
