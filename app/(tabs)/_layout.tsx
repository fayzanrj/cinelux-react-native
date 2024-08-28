import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Tabs, useNavigation, usePathname, useRouter } from "expo-router";
import React, { useState } from "react";
import TabIcon from "../../components/tabs/TabIcon";
import TabsHeader from "../../components/tabs/TabsHeader";
import VerificationModal from "../../components/verification/VerificationModal";

const TabsLayout = () => {
  // State for user verification before navigating to my tickets screen
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Current screen path
  const pathname = usePathname();

  return (
    <>
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
            headerShown : false,
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
          listeners={{
            // Customer logic for my tickets tab bar item press
            tabPress: (e) => {
              e.preventDefault();
              if (pathname !== "/myTickets") setIsModalOpen(true);
            },
          }}
        />
      </Tabs>

      {/* User verification modal for my tickets screen */}
      <VerificationModal
        variant="MY_TICKETS"
        close={() => setIsModalOpen(false)}
        isVisible={isModalOpen}
      />
    </>
  );
};

export default TabsLayout;
