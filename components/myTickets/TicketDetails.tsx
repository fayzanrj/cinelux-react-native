import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { formatDay, formatMonthAndDate } from "../../libs/FormatDates";
import TicketsProps from "../../props/TicketsProps";

// Ticket Details Component
const TicketDetails: React.FC<TicketsProps> = ({
  movie,
  bookingNumber,
  screen,
  date,
  time,
  language,
  seats,
}) => {
  const formattedDate = new Date(date.split("-").reverse().join("-"));
  const day = formatDay(formattedDate);
  const monthAndDate = formatMonthAndDate(formattedDate);

  return (
    <View className="gap-y-2">
      {/* Movie Title and Language */}
      <Text className="text font-bold" style={styles.movieTitle}>
        {movie.title}{" "}
        <Text className="font-normal" style={styles.language}>
          ({language})
        </Text>
      </Text>

      {/* Booking Number and Screen */}
      <View className="flex-row justify-between items-center">
        <Text className="text" style={styles.detailText}>
          Booking #{bookingNumber}
        </Text>
        <Text className="text" style={styles.detailText}>
          {screen}
        </Text>
      </View>

      {/* Date and Time */}
      <View className="flex-row justify-between items-center">
        <Text className="text" style={styles.detailText}>
          {day}, {monthAndDate}
        </Text>
        <Text className="text" style={styles.detailText}>
          {time}
        </Text>
      </View>

      {/* Seats */}
      <Text className="text" style={styles.detailText}>
        Seats: {seats.join(", ")}
      </Text>
    </View>
  );
};

export default TicketDetails;

// Styles for readability and reuse
const styles = StyleSheet.create({
  movieTitle: {
    fontSize: 18,
  },
  language: {
    fontSize: 12,
  },
  detailText: {
    fontSize: 17,
  },
});
