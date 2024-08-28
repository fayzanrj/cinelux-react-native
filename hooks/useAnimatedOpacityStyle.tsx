import Animated, { useAnimatedStyle, interpolate, Extrapolate } from "react-native-reanimated";

const useAnimatedOpacityStyle = (index: number, progress: Animated.SharedValue<number>) => {
  return useAnimatedStyle(() => {
    const opacity = interpolate(
      progress.value,
      [index - 1, index, index + 1],
      [0.1, 1, 0.1], // Smooth transition of opacity
      Extrapolate.CLAMP // Ensuring values don't go beyond the defined range
    );
    return { opacity };
  });
};

export default useAnimatedOpacityStyle;
