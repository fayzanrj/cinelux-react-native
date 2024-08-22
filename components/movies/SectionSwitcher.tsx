import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import SectionSwitcherButton from "./SectionSwitcherButton";
import MovieDetails from "./MovieDetails";
import MovieShowtimes from "./MovieShowtimes";
import MovieProps from "../../props/MovieProps";

// Sections type
type Section = "DETAILS" | "SHOWTIMES";

// Props
interface SectionSwitcherProps {
  movie: MovieProps;
}

const SectionSwitcher: React.FC<SectionSwitcherProps> = ({ movie }) => {
  // State
  const [selectedSection, setSelectedSection] = useState<Section>("DETAILS");

  // Helper function to render the current section
  const renderSection = () => {
    switch (selectedSection) {
      case "DETAILS":
        return <MovieDetails {...movie} />;
      case "SHOWTIMES":
        return <MovieShowtimes movieId={movie._id} />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Section Buttons */}
      <View className="text-center my-6 font-semibold flex-row justify-around">
        <SectionSwitcherButton
          section="Details"
          isSelected={selectedSection === "DETAILS"}
          onPress={() => setSelectedSection("DETAILS")}
        />
        <SectionSwitcherButton
          section="Showtimes"
          isSelected={selectedSection === "SHOWTIMES"}
          onPress={() => setSelectedSection("SHOWTIMES")}
        />
      </View>

      {/* Rendering the selected section */}
      {renderSection()}
    </>
  );
};

export default SectionSwitcher;
