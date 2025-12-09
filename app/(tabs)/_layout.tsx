import Avatar from "@/components/Avatar";
import { useDeColors } from "@/hooks/DeColors";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View } from "react-native";

export default function RootLayout() {
  return (<>
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: true,
          headerTitle: "Home",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: useDeColors().tintColor },
          headerShadowVisible: false,
          headerTintColor: "#fff",
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerRightContainerStyle: { paddingRight: 10 },


          headerLeft: () => (
            <View
              style={{
                backgroundColor: "#fff",
                width: 40,
                height: 40,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="plus" size={20} color="black" />
            </View>
          ),
          headerRight: () => <Avatar />,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen name="Booking" options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="book" size={size} color={color} />
        )
      }} />
      <Tabs.Screen name="Profile" options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="user" size={size} color={color} />

        )
      }} />
    </Tabs>
    <StatusBar />
  </>
  );
}
