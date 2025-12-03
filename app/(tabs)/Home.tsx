import FilterButton from "@/components/FilterButton";
import SearchInputField from "@/components/SearchInputField";
import { useDeColors } from "@/hooks/DeColors";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: useDeColors().backgroundColor,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <SearchInputField />
        <FilterButton />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
