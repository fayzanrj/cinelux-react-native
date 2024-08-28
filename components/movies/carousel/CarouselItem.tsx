import React from "react";
import Animated from "react-native-reanimated";
import { Link } from "expo-router";
import { Image } from "expo-image";
import MovieProps from "../../../props/MovieProps";
import useAnimatedOpacityStyle from "../../../hooks/useAnimatedOpacityStyle";
import { useWindowDimensions } from "react-native";
import { CAROUSEL_HEIGHT_RATIO } from "../../../constants/Carousel";

// Props
interface CarouselItemProps {
  item: MovieProps;
  index: number;
  progress: Animated.SharedValue<number>;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  item,
  index,
  progress,
}) => {
  // Animated style for smoother opacity transition
  const animatedStyle = useAnimatedOpacityStyle(index, progress);
  const { width, height } = useWindowDimensions();

  return (
    <Link href={`/movie/${item._id}`}>
      <Animated.View style={[ animatedStyle]}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
          }}
          style={{
            width,
            height: height * CAROUSEL_HEIGHT_RATIO,
          }}
          className="rounded-md"
        />
      </Animated.View>
    </Link>
  );
};

export default CarouselItem;
