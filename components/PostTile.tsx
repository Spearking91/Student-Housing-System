import { FontAwesome } from '@expo/vector-icons'
import { Image } from 'expo-image'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type props ={
  onPress: () => void;
}
const PostTile = ({onPress}:props) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ backgroundColor: '#fff', height: 350, borderRadius: 20, width: '100%', }} >
      <View style={{ flex: 2, borderRadius: 20, backgroundColor: 'pink', overflow: 'hidden' }}>
        <Image source={require('../assets/images/home.jpeg')} contentFit='cover' style={{ width: '100%', height: '100%' }} />
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 3, justifyContent: 'space-evenly', padding: 10 }}>
          <Text style={{ fontWeight: '500', fontSize: 17 }}>Marian Bay Sands Resort</Text>
          <Text style={{ fontSize: 14 }}>2 Bedroom, 2 beds, 1 washroom</Text>
          <Text style={{ fontSize: 14 }}>GHC 2,000, GHC 100(For Wifi)</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5, padding: 1 }}>
          <FontAwesome name="star" size={18} color="gold" />
          <Text style={{ fontWeight: '500' }}>5.00(259)</Text>
        </View>
      </View>

    </TouchableOpacity>
  )
}

export default PostTile

const styles = StyleSheet.create({})