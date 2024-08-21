import React from "react";
import { Text, TouchableOpacity } from "react-native";

// Props
interface SectionSwitcherButtonProps {
  section: string;
  isSelected: boolean;
  onPress: () => void;
}

const SectionSwitcherButton: React.FC<SectionSwitcherButtonProps> = ({
  section,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={
        isSelected
          ? "border-b border-[#ffffff] scale-110 duration-500"
          : "scale-90"
      }
    >
      <Text className="text text-xl font-semibold">{section}</Text>
    </TouchableOpacity>
  );
};

export default SectionSwitcherButton;
