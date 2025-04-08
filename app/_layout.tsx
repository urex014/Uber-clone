import { SplashScreen, Stack } from "expo-router";
import "@/global.css";
import {useFonts} from 'expo-font';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { useEffect,useState } from "react";

export default function RootLayout() {
  const [loaded] = useFonts({
    "Jakarta-Bold":("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold":("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight":("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light":("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium":("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-Regular":("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold":("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
});
const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); 
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.splashContainer}>
        <Image 
          source={('./assets/images/splash.png')} 
          style={styles.splashImage}
        />
      </View>
    );
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="(auth)" options={{ headerShown: false}}/>
      <Stack.Screen name="(root)" options={{headerShown: false}}/>
      <Stack.Screen name="+not-found"/>
    </Stack>
  );
}
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  splashImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'contain',
  },
});
