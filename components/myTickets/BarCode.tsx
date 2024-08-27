import React from "react";
import { View } from "react-native";

const BarCode: React.FC = () => {
  return (
    <View className="flex-row space-x-1 p-4 rounded-lg justify-center">
      {Array.from({ length: 19 }).map((_, index) => (
        <View
          key={index}
          className={`${index % 2 === 0 ? "w-1" : "w-0.5"} h-16 bg-[#ffffff]`}
        />
      ))}
    </View>
  );
};
export default BarCode;
