import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import BookTicketsButton from "../../components/tickets/BookTicketsButton";
import SeatsLayout from "../../components/tickets/SeatsLayout";
import ShowtimeDetails from "../../components/tickets/ShowtimeDetails";
import fetchShowtimeById from "../../libs/fetch/FetchShowtimeById";
import { triggerScreenToast } from "../../components/toast/ScreenToast";

const Tickets = () => {
  // States
  const { showtimeId } = useLocalSearchParams<{ showtimeId: string }>();
  const [selectedSeats, setSelectedSeats] = useState<Set<string>>(new Set());
  const [bookedSeats, setBookedSeats] = useState<Set<string>>(new Set());

  const {
    data: showtime,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["showtime", showtimeId],
    queryFn: () => fetchShowtimeById(showtimeId.toString()),
    enabled: !!showtimeId,
  });

  useEffect(() => {
    if (showtime?.booked) setBookedSeats(new Set(showtime.booked));
  }, [showtime]);

  // If loading
  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-primaryBg">
        <ActivityIndicator />
      </View>
    );
  }

  // If error occurs
  if (error || !showtime) {
    return (
      <View className="flex-1 justify-center items-center bg-primaryBg">
        <Text className="text text-2xl font-semibold">
          Error finding showtime
        </Text>
      </View>
    );
  }

  // Function to add/remove seats from selected seats
  const handleOnClick = (seat: string) => {
    setSelectedSeats((prev) => {
      const newSelectedSeats = new Set(prev);
      if (newSelectedSeats.has(seat)) {
        newSelectedSeats.delete(seat);
      } else if (selectedSeats.size < 10) {
        newSelectedSeats.add(seat);
      } else {
        triggerScreenToast("error", "You can select a maximum of 10 seats");
      }
      return newSelectedSeats;
    });
  };

  return (
    <View className="bg-primaryBg p-3 flex-1 justify-between">
      <View>
        <ShowtimeDetails {...showtime} />
        <SeatsLayout
          bookedSeats={bookedSeats}
          selectedSeats={selectedSeats}
          onSeatPress={handleOnClick}
        />
      </View>
      
      <BookTicketsButton selectedSeats={selectedSeats} showtime={showtime} />
    </View>
  );
};

export default Tickets;
