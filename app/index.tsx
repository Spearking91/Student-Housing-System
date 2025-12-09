import { Image } from "expo-image";
import { View } from "react-native";
import HousingLogo from "../assets/svg/housing_finder_logo.svg";

export default function Index() {
  // setTimeout(() => {
  //   router.replace('/Home')
  // }, 3000);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../assets/images/logo.png')} contentFit="cover" style={{ width: 50, height: 50 }} />
    </View>
  );
}
