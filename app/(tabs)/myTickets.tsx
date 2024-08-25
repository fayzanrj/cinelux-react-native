import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import MyTicketsItem from "../../components/myTickets/MyTicketsItem";
import { useAppContext } from "../../context/AppContext";
import fetchMyTickets from "../../libs/fetch/FetchMyTickets";

const MyTickets = () => {
  // Context
  const { user } = useAppContext();

  // Tan stack query
  const {
    data: tickets,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tickets", user?.email],
    queryFn: () => fetchMyTickets(user?.email!),
    enabled: !!user?.email,
  });

  // If fetching
  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-primaryBg">
        <ActivityIndicator />
      </View>
    );
  }

  // If error occurs
  if (error) {
    return (
      <View className="flex-1 justify-center items-center bg-primaryBg">
        <Text className="text text-2xl font-semibold">
          Error finding tickets
        </Text>
      </View>
    );
  }

  // If no tickets are found
  if (tickets && tickets?.length < 1) {
    return (
      <View className="flex-1 justify-center items-center bg-primaryBg">
        <Text className="text text-2xl font-semibold">No tickets found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-primaryBg  p-2">
      <Text className="text text-3xl font-bold mb-2">My Tickets</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {tickets?.map((ticket) => (
          <MyTicketsItem key={ticket._id} {...ticket} />
        ))}
      </ScrollView>
    </View>
  );
};

export default MyTickets;
