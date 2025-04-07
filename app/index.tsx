import { SafeAreaView, StatusBar, Text, View } from "react-native";

export default function Home () {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
    <View>
      <Text className="text-black ">Edit app/index.tsx to edit this screen.</Text>
      <StatusBar className="bg-#131316 " barStyle="dark-content" />
    </View>
    </SafeAreaView>
  );
}
