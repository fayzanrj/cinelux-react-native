import { useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import { Modal, View } from "react-native";
import ModalHeader from "./ModalHeader";
import UserInfo from "./UserInfo";
import VerifyCode from "./VerifyCode";

// Props
interface VerificationModalProps {
  isVisible: boolean;
  close: () => void;
  showtimeId: string;
}

const emptyData = {
  name: "",
  email: "",
};

const VerificationModal: React.FC<VerificationModalProps> = ({
  close,
  isVisible,
  showtimeId,
}) => {
  // States
  const [codeSent, setCodeSent] = useState(false);
  const [userData, setUserData] = useState(emptyData);
  //Hook
  const router = useRouter();

  // Function to run after verification is successful
  const handleVerified = useCallback(() => {
    close();
    router.push(`tickets/${showtimeId}`);
  }, [close, router, showtimeId]);

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
          <ModalHeader close={close} />

          {codeSent ? (
            <VerifyCode
              email={userData.email}
              handleVerified={handleVerified}
              changeDetails={() => setCodeSent(false)}
            />
          ) : (
            <UserInfo
              close={close}
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
