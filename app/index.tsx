import { SafeAreaView, StatusBar, Text, View } from "react-native";
import {Redirect} from 'expo-router'

export default function Home () {
  return <Redirect href='/(auth)/welcome' />;
}
