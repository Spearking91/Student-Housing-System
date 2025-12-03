import { Fontisto } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SearchInputField = () => {
  const [setsearchValue, setSetsearchValue] = useState("");
  return (
    <View
      style={{
        paddingHorizontal: 10,
        flex: 1,
        padding: 5,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Fontisto name="search" size={16} color="#ccc" />
      <TextInput
        style={{
          paddingRight: 15,
        }}
        placeholder="Search"
        placeholderTextColor="#ccc"
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
      />
    </View>
  );
};

export default SearchInputField;

const styles = StyleSheet.create({});
