import {Link, Stack} from 'expo-router';
import {Text, View} from 'react-native';

export default function NotFound() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-black">oops</Text>
      <Link href="/" className="text-blue-500">
        Go to home screen!
      </Link>
    </View>
  );
}