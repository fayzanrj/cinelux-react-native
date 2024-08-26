import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { triggerScreenToast } from "../toast/ScreenToast";

// Props
interface BookTicketsButtonProps {
  selectedSeats: Set<string>;
}

const BookTicketsButton: React.FC<BookTicketsButtonProps> = ({
  selectedSeats,
}) => {
  return (
    selectedSeats.size > 0 && (
      <TouchableOpacity
        className="bg-[#1E90FF] p-1 rounded-md mb-10"
        onPress={() =>
          triggerScreenToast("message", "Tickets booked successfully")
        }
      >
        <Text className="text-center text text-lg">
          {[...selectedSeats].join(" | ")}
        </Text>
        <Text className="text text-lg text-center font-bold my-2">
          BOOK TICKETS
        </Text>
      </TouchableOpacity>
    )
  );
};

export default BookTicketsButton;
