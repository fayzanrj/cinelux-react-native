import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAppContext } from "../../context/AppContext";
import VerificationActionButtons from "./VerificationActionButtons";

// Props
interface LoggedInUserProps {
  redirect: () => void;
}

const LoggedInUser: React.FC<LoggedInUserProps> = ({ redirect }) => {
  // Context
  const { user, logout } = useAppContext();

  return (
    <View className="items-center">
      <Text className="text text-lg">You are currently logged in as:</Text>
      <Text className="text text-xl font-semibold mt-6">{user?.name}</Text>
      <Text className="text text-lg font-semibold mb-6">{user?.email}</Text>

      <VerificationActionButtons
        firstButtonText="LOG OUT"
        firstButtonOnPress={logout}
        secondButtonText="Continue"
        secondButtonOnPress={redirect}
      />
    </View>
  );
};

export default LoggedInUser;

const styles = StyleSheet.create({});
