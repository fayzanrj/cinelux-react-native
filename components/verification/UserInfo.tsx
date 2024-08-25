import React, { useState } from "react";
import { View } from "react-native";
import SendVerificationCode from "../../libs/SendVerificationCode";
import validateEmail from "../../libs/ValidateEmail";
import UserProps from "../../props/UserProps";
import InputField from "../shared/InputField";
import VerificationActionButtons from "./VerificationActionButtons";
import { triggerToast } from "../shared/Toast";

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

      // Validating data
      if (userData.name.length < 6) {
        triggerToast("error", "Name should be of at least 6 characters");
        return;
      }

      if (!validateEmail(userData.email)) {
        triggerToast("error", "Invalid Email adress");
        return;
      }

      // Sending code
      const sent = await SendVerificationCode(userData);

      setCodeSent(sent);
      if (sent) {
        triggerToast("success", "Code has been sent successfully");
      } else {
        triggerToast("error", "Some error occured while sending code");
      }
    } catch (error) {
      triggerToast("error", "Some error occured");
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
        value={userData.name}
        placeholder="Enter full name"
        label="Name"
      />

      {/* Email input field */}
      <InputField
        onChange={(text: string) =>
          setUserData((prev) => ({ ...prev, email: text }))
        }
        value={userData.email}
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
