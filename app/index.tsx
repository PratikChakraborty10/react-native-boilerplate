import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function RootLayout() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl">Open index.tsx to start working on your app</Text>
      <StatusBar style="auto" />
      <Link href="/profile">Go to profile</Link>
    </View>
  );
}
 