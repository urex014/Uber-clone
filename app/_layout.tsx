import { Stack } from "expo-router";
import "@/global.css";
import {useFonts} from 'expo-font';

export default function RootLayout() {
  const [loaded] = useFonts({
    "Jakarta-Bold": ("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": ("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": ("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": ("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": ("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-Regular": ("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": ("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
});
  return(
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="+not-found"/>
    </Stack>
  )
}
