import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import Toast from "../components/shared/Toast";
import { AppContextProvider } from "../context/AppContext";

const RootLayout = () => {
  const queryClient = new QueryClient();

  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar barStyle={"light-content"} />
        <Toast />
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
      </QueryClientProvider>
    </AppContextProvider>
  );
};

export default RootLayout;
