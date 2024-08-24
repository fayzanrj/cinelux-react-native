import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Modal, View } from "react-native";
import { useAppContext } from "../../context/AppContext";
import LoggedInUser from "./LoggedInUser";
import ModalHeader from "./ModalHeader";
import UserInfo from "./UserInfo";
import VerifyCode from "./VerifyCode";

// Common props
interface VerificationModalPropsCommon {
  isVisible: boolean;
  close: () => void;
}

// Showtime props
interface VerificationModalPropsShowtime extends VerificationModalPropsCommon {
  variant: "SHOWTIME";
  showtimeId: string;
}

// My tickets props
interface VerificationModalPropsMyTickets extends VerificationModalPropsCommon {
  variant: "MY_TICKETS";
}

type VerificationModalProps =
  | VerificationModalPropsShowtime
  | VerificationModalPropsMyTickets;

const emptyData = {
  name: "",
  email: "",
};

const VerificationModal: React.FC<VerificationModalProps> = ({
  close,
  isVisible,
  variant,
  ...props
}) => {
  // Context
  const { setUser, user } = useAppContext();
  // States
  const [codeSent, setCodeSent] = useState(false);
  const [userData, setUserData] = useState(emptyData);
  // Hook
  const router = useRouter();

  const showtimeId = (props as VerificationModalPropsShowtime).showtimeId || "";
  // Fuction to redirect user to next screen
  const redirect = () => {
    const href =
      variant === "SHOWTIME" ? `/tickets/${showtimeId}` : "/myTickets";

    close();
    router.push(href);
  };

  // Function to run after verification is successful
  const handleVerified = async () => {
    // Saving user
    await AsyncStorage.setItem("user", JSON.stringify(userData), () =>
      setUser(userData)
    );
    setCodeSent(false);
    redirect();
  };

  // Function to close verification modal
  const closeModal = () => {
    close();
    setCodeSent(false);
    setUserData(emptyData);
  };

  return (
    <Modal
      statusBarTranslucent
      presentationStyle="overFullScreen"
      transparent
      animationType="fade"
      visible={isVisible}
      onDismiss={close}
    >
      <View className="flex-1 justify-center bg-[#000000ae]">
        <View className="bg-primaryBg w-[95%] rounded-md mx-auto p-4">
          <ModalHeader close={closeModal} />

          {user ? (
            <LoggedInUser redirect={redirect} />
          ) : codeSent ? (
            <VerifyCode
              email={userData.email}
              handleVerified={handleVerified}
              changeDetails={() => setCodeSent(false)}
            />
          ) : (
            <UserInfo
              close={closeModal}
              setUserData={setUserData}
              userData={userData}
              setCodeSent={setCodeSent}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default VerificationModal;
