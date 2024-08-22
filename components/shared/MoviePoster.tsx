import { Image } from "expo-image";
import React from "react";

// Props
interface MoviePosterProps {
  url: string;
  size: "lg" | "md";
}

const MoviePoster: React.FC<MoviePosterProps> = ({ url, size }) => {
  return (
    <Image
      source={{ uri: `https://image.tmdb.org/t/p/original${url}` }}
      className={size === "lg" ? "w-48 h-72" : "w-32 h-48"}
    />
  );
};

export default React.memo(MoviePoster);
