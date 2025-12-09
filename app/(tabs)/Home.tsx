import FilterButton from "@/components/FilterButton";
import PostTile from "@/components/PostTile";
import SearchInputField from "@/components/SearchInputField";
import { useDeColors } from "@/hooks/DeColors";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: useDeColors().backgroundColor,
      }}
    ><LinearGradient
        colors={[useDeColors().tintColor, 'transparent']}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          height: 500
        }}
      />
       <View style={{ flexDirection: "row", alignItems: "center", gap: 12, marginBottom: 10 }}>
        <SearchInputField />
        <FilterButton />
      </View>

      <FlatList data={[{ id: 1 }, { id: 2 }]} contentContainerStyle={{ gap: 20 }} renderItem={() => (
        <PostTile />
      )} />


    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
