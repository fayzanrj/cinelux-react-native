import { useRef } from "react";
import { Animated } from "react-native";

export const createToastAnimations = (
  toastHeight: number,
  duration: number = 2000
) => {
  const toastAnimation = useRef(new Animated.Value(-100)).current;
  const opacityAnimation = useRef(new Animated.Value(0)).current;

  const show = () => {
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
        ]).start();
      }, duration);
    });
  };

  const hide = (callback?: () => void) => {
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
    ]).start(callback);
  };

  return { show, hide, toastAnimation, opacityAnimation };
};

