import React, { useState } from "react";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import ShowtimeProps from "../../props/ShowtimeProps";
import VerificationModal from "../verification/VerificationModal";

// Props
interface ShowtimesListItemProps extends ShowtimeProps {
  showTitle?: boolean;
}

const ShowtimesListItem: React.FC<ShowtimesListItemProps> = ({
  time,
  movie,
  screen,
  language,
  _id,
  showTitle = false,
}) => {
  // State for verification modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <VerificationModal
        isVisible={isModalOpen}
        close={() => setIsModalOpen(false)}
        showtimeId={_id}
        variant="SHOWTIME"
      />

      {/* Showtime data */}
      <TouchableOpacity
        className="bg-secondaryBg p-2 rounded-md my-1"
        onPress={() => setIsModalOpen(true)}
      >
        <Text className="text font-semibold my-1" style={{ fontSize: 17 }}>
          {time}
        </Text>
        {showTitle && (
          <Text className="text font-semibold my-1 text-lg">{movie.title}</Text>
        )}
        <Text className="text my-1" style={{ fontSize: 15 }}>
          {screen} - {language}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default ShowtimesListItem;
