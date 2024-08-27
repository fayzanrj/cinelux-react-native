import React from 'react';
import { View } from 'react-native';

const Divider: React.FC = () => {
    return (
      <View className="flex-row gap-x-2 h-2 justify-center items-center bg-primaryBg max-w-full w-48 mx-auto">
        {Array.from({ length: 10 }).map((_, index) => (
          <View key={index} className="w-3 h-0.5 rounded-3xl bg-[#ffffff]"/>
        ))}
      </View>
    );
  };

export default Divider
