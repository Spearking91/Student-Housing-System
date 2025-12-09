import Avatar from "@/components/Avatar";
import { useDeColors } from "@/hooks/DeColors";
import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Statusbar />
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
        }}
      />
      <Tabs.Screen name="Booking" options={{}} />
      <Tabs.Screen name="Profile" options={{}} />
    </Tabs>
  );
}
