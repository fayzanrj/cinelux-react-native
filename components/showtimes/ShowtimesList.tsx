import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ShowtimeProps from "../../props/ShowtimeProps";
import ShowtimesListItem from "../shared/ShowtimesListItem";

// Props
interface ShowtimesListProps {
  showtimes: ShowtimeProps[];
}

const ShowtimesList: React.FC<ShowtimesListProps> = ({ showtimes }) => {
  return (
    <ScrollView
      className="flex-1"
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingVertical: 6,
      }}
      showsVerticalScrollIndicator={false}
    >
      {showtimes && showtimes.length > 0 ? (
        showtimes.map((showtime) => (
          <ShowtimesListItem key={showtime._id} {...showtime} showTitle />
        ))
      ) : (
        <View className="flex-1 justify-center items-center">
          <Text className="text text-2xl font-semibold">No shows found</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default ShowtimesList;

const styles = StyleSheet.create({});
