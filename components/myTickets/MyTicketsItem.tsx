import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import TicketsProps from "../../props/TicketsProps";
import MyTicketModal from "./MyTicketModal";

const MyTicketsItem: React.FC<TicketsProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && (
        <MyTicketModal
          {...props}
          isVisible={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
      
      <TouchableOpacity
        className="border my-2 bg-secondaryBg p-3 py-2 w-[98%] mx-auto rounded-md"
        onPress={() => setIsModalOpen(true)}
      >
        <Text className="text text-xl font-bold">
          Booking#{props.bookingNumber}
        </Text>

        <View className="my-1">
          <Text className="text text-xl font-semibold">
            {props.movie.title}{" "}
            <Text className="text-base font-normal">({props.language})</Text>
          </Text>

          <Text className="text text-lg">
            Purchased on : {new Date(props.createdAt).toDateString()}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default MyTicketsItem;
