import Avatar from "@/components/Avatar";
import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: true,
          headerTitle: "Home",
          headerTitleAlign: "center",
          
          headerLeft: () => (
            <View
              style={{
                backgroundColor: "#fff",
                width: 50,
                height: 50,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="plus" size={20} color="black" />
            </View>
          ),
          headerRight: () => <Avatar />,
        }}
      />
      <Tabs.Screen name="Booking" options={{}} />
      <Tabs.Screen name="Profile" options={{}} />
    </Tabs>
  );
}
