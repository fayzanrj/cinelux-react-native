import axios from "axios";
import React, { useState } from "react";
import { Text, View } from "react-native";
import InputField from "../shared/InputField";
import VerificationActionButtons from "./VerificationActionButtons";
import { triggerToast } from "../shared/Toast";

// Destructuring environment variables
const { EXPO_PUBLIC_API_URL, EXPO_PUBLIC_API_ACCESS_TOKEN } = process.env;

// Props
interface VerifyCodeProps {
  changeDetails: () => void;
  email: string;
  handleVerified: () => void;
}

const VerifyCode: React.FC<VerifyCodeProps> = ({
  changeDetails,
  email,
  handleVerified,
}) => {
  // States
  const [code, setCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  // Function to handle verifying code
  const handleVerification = async () => {
    try {
      setIsVerifying(true);

      // Validating
      if (code.length !== 6) {
        triggerToast("error", "Invalid Code");
        return;
      }

      // Verifying code
      await axios.post(
        `${EXPO_PUBLIC_API_URL}/api/v1/userAuth/verifyCode`,
        { email, code },
        {
          headers: {
            "Content-Type": "application/json",
            accessToken: EXPO_PUBLIC_API_ACCESS_TOKEN!,
          },
        }
      );

      triggerToast("success", "Verification successful");
      handleVerified();
    } catch (error) {
      triggerToast("error", "Invalid Code");
    } finally {
      setIsVerifying(false);
    }
  };
  return (
    <View>
      {/* Header text */}
      <View className="my-4 text-center w-full">
        <Text className="text text-center text-lg">
          A verification code has been sent to
        </Text>
        <Text className="text font-semibold  text-center text-lg">{email}</Text>
      </View>

      {/* Code input field */}
      <InputField
        onChange={(text: string) => setCode(text)}
        value={code}
        placeholder="Enter code"
        label="Verification Code"
        type="numeric"
      />

      {/* Action buttons */}
      <VerificationActionButtons
        firstButtonText="Change details"
        firstButtonOnPress={changeDetails}
        secondButtonText="Verify Code"
        secondButtonOnPress={handleVerification}
        isLoading={isVerifying}
      />
    </View>
  );
};

export default VerifyCode;
