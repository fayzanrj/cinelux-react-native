import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import TicketsProps from "../../props/TicketsProps";
import MoviePoster from "../shared/MoviePoster";
import ScreenModal from "../shared/ScreenModal";
import BarCode from "./BarCode";
import Divider from "./Divider";
import TicketDetails from "./TicketDetails";

// Props
interface MyTicketModalProps extends TicketsProps {
  closeModal: () => void;
  isVisible: boolean;
}

// MyTicketModal Component
const MyTicketModal: React.FC<MyTicketModalProps> = ({
  closeModal,
  isVisible,
  ...props
}) => {
  const { width } = useWindowDimensions();
  const { movie } = props;

  return (
    <ScreenModal
      closeModal={closeModal}
      isVisible
      showHeader={false}
      showBgColor={false}
      withoutFeedbackOnClick={closeModal}
    >
      <MoviePoster url={movie.poster_path} width={width} />
      <Divider />

      <View className="w-[85%] bg-primaryBg p-3 rounded-2xl justify-between pt-5 pb-2 mx-auto">
        <TicketDetails {...props} />
        <BarCode />
      </View>
    </ScreenModal>
  );
};

export default MyTicketModal;

const styles = StyleSheet.create({});
