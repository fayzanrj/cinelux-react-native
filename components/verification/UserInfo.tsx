import React, { useState } from "react";
import { View } from "react-native";
import SendVerificationCode from "../../libs/SendVerificationCode";
import validateEmail from "../../libs/ValidateEmail";
import UserProps from "../../props/UserProps";
import InputField from "../shared/InputField";
import VerificationActionButtons from "./VerificationActionButtons";

// Props
interface UserInfoProps {
  close: () => void;
  setCodeSent: React.Dispatch<React.SetStateAction<boolean>>;
  userData: UserProps;
  setUserData: React.Dispatch<React.SetStateAction<UserProps>>;
}

const UserInfo: React.FC<UserInfoProps> = ({
  close,
  setCodeSent,
  setUserData,
  userData,
}) => {
  // State
  const [isSending, setIsSending] = useState(false);

  // Function to handle sending code to user's email
  const handleSend = async () => {
    try {
      setIsSending(true);

      if (!userData.name || !validateEmail(userData.email)) return;

      const sent = await SendVerificationCode(userData);
      setCodeSent(sent);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };
  return (
    <View>
      {/* Name input field */}
      <InputField
        onChange={(text: string) =>
          setUserData((prev) => ({ ...prev, name: text }))
        }
        placeholder="Enter full name"
        label="Name"
      />

      {/* Email input field */}
      <InputField
        onChange={(text: string) =>
          setUserData((prev) => ({ ...prev, email: text }))
        }
        placeholder="Enter email"
        label="Email"
        type="email-address"
      />

      {/* Action buttons */}
      <VerificationActionButtons
        firstButtonText="Look for more"
        firstButtonOnPress={close}
        secondButtonText={"Send Code"}
        secondButtonOnPress={handleSend}
        isLoading={isSending}
      />
    </View>
  );
};

export default UserInfo;

