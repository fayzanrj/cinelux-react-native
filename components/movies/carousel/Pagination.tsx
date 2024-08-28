import React from 'react';
import { View } from 'react-native';

// Pagination Component
const Pagination: React.FC<{ total: number; activeIndex: number }> = ({
    total,
    activeIndex,
  }) => {
    return (
      <View className="flex-row justify-center items-center absolute bottom-5 left-0 right-0">
        {Array.from({ length: total }).map((_, index) => (
          <View
            key={index}
            className={`rounded-full mx-1 duration-500 ${
              activeIndex === index ? "bg-[#ffffff] w-1.5 h-1.5" : "bg-secondaryBg w-1 h-1"
            }`}
          />
        ))}
      </View>
    );
  };
  

export default Pagination
