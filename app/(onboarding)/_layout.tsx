import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function OnboardingLayout() {
  return (
    <Stack>
        <Stack.Screen name='initial'/>
    </Stack>
  )
}