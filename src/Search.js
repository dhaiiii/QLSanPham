// SearchScreen.js
import React from "react";
import { View, Text } from "react-native";

const Searchs = ({ navigation }) => {
  const handleSearch = (searchText) => {
    // Implement the search logic here and update the UI accordingly
  };

  return (
    <View>
      <Text>Search Screen</Text>
      <Searchs onSearch={handleSearch} />
    </View>
  );
};

export default Searchs;
