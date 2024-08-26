import React from "react";
import { View, Text, Image } from "react-native";

const Screen: React.FC = () => (
  <View className="my-10">
    <Text className="text-center text">Screen</Text>
    <Image source={require("../../assets/screen.png")} className="w-full h-6" />
  </View>
);

export default Screen;
