import React from "react";
import ShowtimeProps from "../../props/ShowtimeProps";
import ScreenModal from "../shared/ScreenModal";
import { Text, View } from "react-native";
import MoviePoster from "../shared/MoviePoster";
import { formatDay, formatMonthAndDate } from "../../libs/FormatDates";
import ActionButtons from "../shared/ActionButtons";
import { triggerScreenToast } from "../toast/ScreenToast";

interface TicketsConfirmationModalProps extends ShowtimeProps {
  seats: string[];
  isVisible: boolean;
  closeModal: () => void;
}

const TicketsConfirmationModal: React.FC<TicketsConfirmationModalProps> = ({
  closeModal,
  isVisible,
  movie,
  date,
  time,
  language,
  screen,
  seats,
}) => {
  const formattedDate = new Date(date.split("-").reverse().join("-"));
  const day = formatDay(formattedDate);
  const monthAndDate = formatMonthAndDate(formattedDate);

  return (
    <ScreenModal
      isVisible={isVisible}
      closeModal={closeModal}
      showHeader={false}
      showBgColor={false}
      modalBgColor="#000000ed"
    >
      <View className="p-4 bg-primaryBg rounded-t-md flex-row">
        <MoviePoster url={movie.poster_path} size="sm" />
        <View className="ml-2 flex-1">
          <Text className="text-2xl font-bold text">{movie.title}</Text>
          <Text className="text-sm text" maxFontSizeMultiplier={1}>
            {language} | {screen}
          </Text>
          <View className="flex-row gap-2 mt-1">
            <Text className="text-lg text" maxFontSizeMultiplier={1}>
              {day},
            </Text>
            <Text className="text-lg text" maxFontSizeMultiplier={1}>
              {monthAndDate} |
            </Text>
            <Text className="text-lg text" maxFontSizeMultiplier={1}>
              {time}
            </Text>
          </View>
        </View>
      </View>

      <View className="w-full h-[0.5px] bg-[#ffffff]" />

      <View className="bg-primaryBg py-2 flex-row">
        <View className="flex-1 justify-center items-center">
          <Text className="text-3xl font-black text">{seats.length}</Text>
          <Text className="text-lg text">Tickets</Text>
        </View>
        <View className="flex-1 justify-center items-center">
          <Text className="text-lg font-semibold text">{seats.join(", ")}</Text>
        </View>
      </View>

      <View className="w-full h-[0.5px] bg-[#ffffff]" />

      <View className="p-4 bg-primaryBg">
        <View className="flex-row justify-between">
          <Text className="text-lg text">Ticket Price</Text>
          <Text className="text-lg text">$8</Text>
        </View>
        <View className="items-end">
          <Text className="text-lg text">x{seats.length}</Text>
        </View>
        <View className="flex-row justify-between mt-4">
          <Text className="text-xl font-bold text">Total Price</Text>
          <Text className="text-xl font-bold text">${seats.length * 8}</Text>
        </View>
      </View>

      <View className="w-full h-[0.5px] bg-[#ffffff]" />

      <View className="bg-primaryBg p-2 rounded-b-md">
        <ActionButtons
          firstButtonText="Cancel"
          firstButtonOnPress={closeModal}
          secondButtonText="Proceed to Pay"
          secondButtonOnPress={() => {
            triggerScreenToast("success", "Booked");
            closeModal();
          }}
        />
      </View>
    </ScreenModal>
  );
};

export default TicketsConfirmationModal;
