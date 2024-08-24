import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { Pressable, View } from "react-native";

// Props
interface ModalHeaderProps {
  close: () => void;
}

const ModalHeader : React.FC<ModalHeaderProps> = ({close}) => {
  return (
    <View className="flex-row justify-between items-start">
      <Image
        source={require("../../assets/logo.png")}
        style={{ width: 70, height: 70 }}
        alt="logo"
      />
      <Pressable onPress={close}>
        <AntDesign name="close" size={24} color="#ffffff" />
      </Pressable>
    </View>
  );
};

export default ModalHeader;

