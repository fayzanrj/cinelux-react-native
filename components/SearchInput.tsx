import React from "react";
import { TextInput, View } from "react-native";

// Props
interface SearchInputProps {
  search: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ search }) => {
  return (
    <View>
      <TextInput
        className=" w-[90%] mt-3 mx-auto px-2 h-10 text-lg bg-secondaryBg text rounded-md"
        placeholder="Search a movie"
        placeholderTextColor={"#ffffff"}
        numberOfLines={1}
        multiline
        onChangeText={(text) => search(text)}
        style={{
          textAlignVertical: "center",
        }}
        keyboardAppearance="dark"
      />
    </View>
  );
};

export default SearchInput;
