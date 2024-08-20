import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerTitle: "Home", headerShown: false }}
      />
      <Stack.Screen name="movieDetails" />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
