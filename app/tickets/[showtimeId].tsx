import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Tickets = () => {
  const { showtimeId } = useLocalSearchParams();
  return (
    <ScrollView className="bg-primaryBg">
      <Text className="text">{showtimeId}</Text>
    </ScrollView>
  );
};

export default Tickets;
