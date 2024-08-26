import React from "react";
import { Animated, Text, View, useWindowDimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ToastType } from "../../props/ToastProps";

// Props
interface ToastLayoutProps {
  toast: {
    type: ToastType;
    message: string;
  };
  toastAnimation: Animated.Value;
  opacityAnimation: Animated.Value;
  setToastHeight: (height: number) => void;
}

const ToastLayout: React.FC<ToastLayoutProps> = ({
  toast,
  toastAnimation,
  opacityAnimation,
  setToastHeight,
}) => {
  const { width } = useWindowDimensions();

  return (
    <Animated.View
      className={`absolute top-0 bg-secondaryBg mx-auto w-[95%] left-1/2 py-4 px-2 rounded-md flex-row items-center`}
      style={[
        {
          transform: [
            { translateY: toastAnimation },
            { translateX: -(width * 0.95) / 2 },
          ],
          opacity: opacityAnimation,
          zIndex: 9999,
        },
      ]}
      onLayout={(event) => setToastHeight(event.nativeEvent.layout.height)}
    >
      {toast.type === "success" && (
        <View className="bg-[#ffffff] rounded-full h-5 w-5 justify-center items-center mx-2">
          <MaterialIcons name="done" size={16} color="black" />
        </View>
      )}
      {toast.type === "error" && (
        <View className="h-6 w-6 mx-2">
          <MaterialIcons
            name="error"
            size={24}
            color="#ffffff"
            className="mx-2"
          />
        </View>
      )}
      <Text className="text-center text-lg flex-shrink text">
        {toast.message}
      </Text>
    </Animated.View>
  );
};

export default ToastLayout;
