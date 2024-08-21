import { Stack } from "expo-router";
import React from "react";
import { AppContextProvider } from "../context/AppContext";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  return (
    <AppContextProvider>
      <StatusBar translucent animated style="light" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#111317",
          },
          headerShadowVisible: false,
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{ headerTitle: "Home", headerShown: false }}
        />
        <Stack.Screen
          name="movie/[movieId]"
          options={{ headerTitle: "Movie Details", title: "Movie Details" }}
        />
      </Stack>
    </AppContextProvider>
  );
};

export default RootLayout;
