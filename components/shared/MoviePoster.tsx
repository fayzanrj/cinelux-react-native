import { Image } from "expo-image";
import React from "react";

// Common Props
interface MoviePosterCommonProps {
  url: string;
}

// Size props
interface MoviePosterSizeProps extends MoviePosterCommonProps {
  size?: "lg" | "md";
}

// Width props
interface MoviePosterWidthProps extends MoviePosterCommonProps {
  width?: number;
}

// Props
type MoviePosterProps = MoviePosterSizeProps | MoviePosterWidthProps;

const MoviePoster: React.FC<MoviePosterProps> = ({ url, ...props }) => {
  const size = (props as MoviePosterSizeProps).size;
  const width = (props as MoviePosterWidthProps).width;

  let imageSizeClass = "";
  let dynamicHeight = 0;

  if (size) {
    imageSizeClass = size === "lg" ? "w-48 h-72" : "w-32 h-48";
  }

  if (width) {
    dynamicHeight = width * 1.1;
  }

  return (
    <Image
      source={{ uri: `https://image.tmdb.org/t/p/original${url}` }}
      className={size ? imageSizeClass : "w-[85%] mx-auto rounded-2xl"}
      style={width ? { height: dynamicHeight } : undefined}
    />
  );
};

export default React.memo(MoviePoster);
