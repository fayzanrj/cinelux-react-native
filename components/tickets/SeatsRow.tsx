import React from "react";
import { View } from "react-native";
import Seat from "./Seat";

// Props
interface SeatsRowProps {
  row: string[];
  bookedSeats: Set<string>;
  selectedSeats: Set<string>;
  onSeatPress: (seat: string) => void;
}

const SeatsRow: React.FC<SeatsRowProps> = ({ row, bookedSeats, selectedSeats, onSeatPress }) => (
  <View className="flex-row my-1 justify-between items-center">
    {row.map((seat) => {
      const isBooked = bookedSeats.has(seat);
      const isSelected = selectedSeats.has(seat);

      return (
        <Seat
          key={seat}
          seat={seat}
          isBooked={isBooked}
          isSelected={isSelected}
          onSeatPress={onSeatPress}
        />
      );
    })}
  </View>
);

export default SeatsRow;
