import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import ScreenToast from "../components/toast/ScreenToast";
import { AppContextProvider } from "../context/AppContext";

const RootLayout = () => {
  const queryClient = new QueryClient();

  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar backgroundColor="#111317" barStyle="light-content" />
        <ScreenToast />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "#111317",
            },
            headerShadowVisible: false,
            headerTintColor: "#fff",
            headerTitleAlign : "center"
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
          <Stack.Screen
            name="tickets/[showtimeId]"
            options={{ headerTitle: "Tickets", title: "Tickets" }}
          />
        </Stack>
      </QueryClientProvider>
    </AppContextProvider>
  );
};

export default RootLayout;
