import React from "react";
import { TextInput, View, Text, KeyboardTypeOptions } from "react-native";

// Props
interface InputFieldProps {
  onChange: (text: string) => void;
  value: string;
  placeholder: string;
  label?: string;
  type?: KeyboardTypeOptions;
}

const InputField: React.FC<InputFieldProps> = ({
  onChange,
  placeholder,
  label,
  type = "default",
  value,
}) => {
  return (
    <View className="w-full mt-3">
      {label && (
        <Text className="text text-lg font-semibold text-white mb-1">
          {label}
        </Text>
      )}
      <TextInput
        className="w-full px-2 h-10 text-lg  text bg-secondaryBg text-white rounded-md"
        placeholder={placeholder}
        placeholderTextColor={"#dcdcdc"}
        numberOfLines={1}
        multiline
        onChangeText={(text) => onChange(text)}
        value={value}
        style={{
          textAlignVertical: "center",
        }}
        keyboardType={type}
        keyboardAppearance="dark"
      />
    </View>
  );
};

export default InputField;
