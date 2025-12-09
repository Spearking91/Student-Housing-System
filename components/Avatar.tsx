import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

const Avatar = () => {
  return (
    <View
      style={{
        backgroundColor: "blue",
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Image
      contentFit="cover"
        style={{
   
          width: "100%",
          height: "100%",
        }}
        source={require("../assets/images/home.jpeg")}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({});
