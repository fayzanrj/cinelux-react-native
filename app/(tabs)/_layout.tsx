import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import TabIcon from "../../components/tabs/TabIcon";
import TabsHeader from "../../components/tabs/TabsHeader";


const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerTitle: () => <TabsHeader />,
        headerStyle: {
          backgroundColor: "#111317",
        },
        headerShadowVisible: false,
        headerTintColor: "#000",
        tabBarStyle: {
          backgroundColor: "#111317",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#1E90FF",
        tabBarInactiveTintColor: "white",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon IconComponent={Entypo} name="home" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="movies"
        options={{
          title: "Movies",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              IconComponent={MaterialIcons}
              name="local-movies"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="showtimes"
        options={{
          title: "Showtimes",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              IconComponent={MaterialCommunityIcons}
              name="calendar-clock"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="myTickets"
        options={{
          title: "My Tickets",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              IconComponent={MaterialCommunityIcons}
              name="ticket-account"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
