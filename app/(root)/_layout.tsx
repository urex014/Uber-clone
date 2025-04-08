import { SplashScreen, Stack } from "expo-router";
import "@/global.css";
import {useFonts} from 'expo-font';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { useEffect,useState } from "react";

export default function RootLayout() {
    

    return (
    <Stack>
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="(auth)" options={{ headerShown: false}}/>
        <Stack.Screen name="(root)" options={{headerShown: false}}/>
        <Stack.Screen name="+not-found"/>
    </Stack>
    );
}
