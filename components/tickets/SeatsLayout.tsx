import React from "react";
import { View } from "react-native";
import Screen from "./Screen";
import SeatsRow from "./SeatsRow";
import Seats from "../../constants/Seats";

// Props
interface SeatsLayoutProps {
  bookedSeats: Set<string>;
  selectedSeats: Set<string>;
  onSeatPress: (seat: string) => void;
}

const SeatsLayout: React.FC<SeatsLayoutProps> = ({
  bookedSeats,
  selectedSeats,
  onSeatPress,
}) => (
  <>
    <Screen />
    {Seats.map((row, rowIndex) => (
      <SeatsRow
        key={rowIndex}
        row={row}
        bookedSeats={bookedSeats}
        selectedSeats={selectedSeats}
        onSeatPress={onSeatPress}
      />
    ))}
  </>
);

export default SeatsLayout;
