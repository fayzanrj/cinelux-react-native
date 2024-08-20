import React from "react";
import { Image } from "react-native";

const TabsHeader = () => {
  return (
    <Image
      source={require("../../assets/logo.png")}
      style={{ width: 40, height: 40 }}
      alt="logo"
    />
  );
};

export default TabsHeader;
