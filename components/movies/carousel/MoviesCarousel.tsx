import React, { useState } from "react";
import { useWindowDimensions, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import MovieProps from "../../../props/MovieProps";
import CarouselItem from "./CarouselItem";
import Pagination from "./Pagination";
import {
  CAROUSEL_AUTO_PLAY_INTERVAL,
  CAROUSEL_HEIGHT_RATIO,
  CAROUSEL_SCROLL_ANIMATION_DURATION,
} from "../../../constants/Carousel";

// Props
interface MoviesCarouselProps {
  movies: MovieProps[];
}

const MoviesCarousel: React.FC<MoviesCarouselProps> = ({ movies }) => {
  const { width, height } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const progress = useSharedValue(0); // Shared value for the animated opacity

  // Calculating carousel item dimensions
  const carouselHeight = height * CAROUSEL_HEIGHT_RATIO;

  // Handling progress change to update the active index and progress value
  const handleProgressChange = (_: number, absoluteProgress: number) => {
    setActiveIndex(Math.round(absoluteProgress));
    progress.value = absoluteProgress % movies.length;
  };

  return (
    <View>
      <Carousel
        loop
        width={width}
        height={carouselHeight}
        autoPlay={true}
        mode="parallax"
        pagingEnabled
        style={{ height: carouselHeight, width }}
        data={movies}
        scrollAnimationDuration={CAROUSEL_SCROLL_ANIMATION_DURATION}
        autoPlayInterval={CAROUSEL_AUTO_PLAY_INTERVAL}
        autoFillData
        defaultIndex={0}
        onProgressChange={handleProgressChange}
        renderItem={(props) => <CarouselItem {...props} progress={progress} />}
      />

      {/* Render Pagination Component */}
      <Pagination total={movies.length} activeIndex={activeIndex} />
    </View>
  );
};

export default MoviesCarousel;
