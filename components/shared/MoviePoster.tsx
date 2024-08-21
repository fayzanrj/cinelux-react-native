import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

// Props
interface MoviePosterProps {
  url: string;
  size: "lg" | "md";
}

const MoviePoster: React.FC<MoviePosterProps> = ({ url, size }) => {
  return (
    <Image
      source={{ uri: `https://image.tmdb.org/t/p/original${url}` }}
      className={size === "lg" ? "w-48 h-72" : "w-36 h-56"}
    />
  );
};

export default React.memo(MoviePoster);
