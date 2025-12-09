import { ImageBackground } from 'expo-image'
import { router } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Initial = () => {
  return (
    <ImageBackground
      style={{
        flex: 1,
        justifyContent: "flex-end",
      }}
      source={require("../../assets/images/home.jpeg")}
    >
      <View
        style={{
          flex: 0.4,
          justifyContent: "center",
          // alignItems: "center",
          borderRadius: 250,
          backgroundColor: "rgba(161, 208, 213, 0.5)",
          padding: 20,
          gap: 20,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "condensedBold",
            textAlign: "center",
            color: "#fff",
          }}
        >
          Plan your stay in UMaT with ease and Confidence!
        </Text>
        <Text
          style={{
            fontWeight: "300",
            fontSize: 16,
            textAlign: "center",
            color: "#fff",
          }}
        >
          Build your itnerary in minutes, not hours.
        </Text>
        <Pressable
          onPress={() => { router.push('/Home') }}
          style={{
            backgroundColor: "aqua",
            width: "100%",
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <Text>Get Started</Text>
        </Pressable>
      </View>
    </ImageBackground>
  )
}

export default Initial

const styles = StyleSheet.create({})