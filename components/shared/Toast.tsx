import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Text, useWindowDimensions, View } from "react-native";

// toast types
type ToastType = "success" | "error" | "message";

// Defining the global function for showing toast in order to extract showToast function from the component
let showToastFunction: (
  type: ToastType,
  message: string,
  duration?: number
) => void = () => {};

const Toast = () => {
  // States
  const [toast, setToast] = useState<{
    visible: boolean;
    type: ToastType;
    message: string;
  }>({ visible: false, type: "message", message: "" });
  const [toastHeight, setToastHeight] = useState(0);

  // Screen size
  const { width } = useWindowDimensions();

  // Animating the toast view
  const toastAnimation = useRef(new Animated.Value(-100)).current;
  const opacityAnimation = useRef(new Animated.Value(0)).current;

  // Function to trigger toast
  const showToast = (type: ToastType, message: string, duration?: number) => {
    // Setting toast
    setToast({ visible: true, type, message });

    // Animating toast
    Animated.parallel([
      Animated.timing(toastAnimation, {
        toValue: 40,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Animating closing toast
      setTimeout(() => {
        Animated.parallel([
          Animated.timing(toastAnimation, {
            toValue: -toastHeight - 20,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(opacityAnimation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ]).start(() =>
          setToast({
            visible: false,
            type: "message",
            message: "",
          })
        );
      }, duration || 2000);
    });
  };

  useEffect(() => {
    showToastFunction = showToast;
  }, []);

  return (
    toast.visible && (
      <Animated.View
        className={`absolute top-0 z-50 mx-auto w-[95%] left-1/2 py-4 px-2 rounded-md bg-secondaryBg flex-row items-center`}
        style={[
          {
            transform: [
              { translateY: toastAnimation },
              { translateX: -(width * 0.95) / 2 },
            ],
            opacity: opacityAnimation,
          },
        ]}
        onLayout={(event) => setToastHeight(event.nativeEvent.layout.height)}
      >
        {/* Success icon */}
        {toast.type === "success" && (
          <View className="bg-[#ffffff] rounded-full h-5 w-5 justify-center items-center mx-2">
            <MaterialIcons name="done" size={16} color="black" />
          </View>
        )}

        {/* Error icon */}
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

        {/* Notification msg */}
        <Text className="text-center text-lg text flex-shrink">
          {toast.message}
        </Text>
      </Animated.View>
    )
  );
};

export default Toast;

// Exporting showToast function for using in other components
export const triggerToast = (
  type: ToastType,
  message: string,
  duration?: number
) => {
  showToastFunction(type, message, duration);
};
