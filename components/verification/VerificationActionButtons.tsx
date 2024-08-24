import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View
} from "react-native";

// Props
interface VerificationActionButtonsProps {
  firstButtonText: string;
  firstButtonOnPress: () => void;
  secondButtonText: string;
  secondButtonOnPress: () => void;
  isLoading?: boolean;
}

const VerificationActionButtons: React.FC<VerificationActionButtonsProps> = ({
  firstButtonOnPress,
  firstButtonText,
  secondButtonOnPress,
  secondButtonText,
  isLoading = false,
}) => {
  return (
    <View className="flex-row justify-center gap-4 items-center my-3">
      {/* Button 1 for going back */}
      <TouchableOpacity
        className="w-full h-10 flex-shrink items-center justify-center"
        onPress={firstButtonOnPress}
      >
        <Text className="text text-lg font-semibold">{firstButtonText}</Text>
      </TouchableOpacity>

      {/* Button 2 for continuation */}
      <TouchableOpacity
        className="w-full  bg-[#1D4ED8] rounded-md h-10 flex-shrink items-center justify-center"
        onPress={secondButtonOnPress}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text className="text text-lg font-semibold">{secondButtonText}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default VerificationActionButtons;
