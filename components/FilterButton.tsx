import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

const FilterButton = () => {
  return (
    <View
      style={{
        backgroundColor: "blue",
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialIcons name="filter-list" size={24} color="black" />
    </View>
  );
};

export default FilterButton;

const styles = StyleSheet.create({});
