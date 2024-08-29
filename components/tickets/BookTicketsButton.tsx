import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import ShowtimeProps from "../../props/ShowtimeProps";
import TicketsConfirmationModal from "./TicketsConfirmationModal";

// Props
interface BookTicketsButtonProps {
  selectedSeats: Set<string>;
  showtime: ShowtimeProps;
}

const BookTicketsButton: React.FC<BookTicketsButtonProps> = ({
  selectedSeats,
  showtime,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && (
        <TicketsConfirmationModal
          isVisible={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          seats={[...selectedSeats]}
          {...showtime}
        />
      )}
      {selectedSeats.size > 0 && (
        <TouchableOpacity
          className="bg-[#1E90FF] p-1 rounded-md mb-10"
          onPress={() => setIsModalOpen(true)}
        >
          <Text className="text-center text text-lg">
            {[...selectedSeats].join(" | ")}
          </Text>
          <Text className="text text-lg text-center font-bold my-2">
            BOOK TICKETS
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default BookTicketsButton;
