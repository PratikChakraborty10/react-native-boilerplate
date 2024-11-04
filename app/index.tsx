import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Text>Open App.js to start working on your app</Text>
      <StatusBar style="auto" />
      <Link href="/profile">Go to profile</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#83eb34",
    alignItems: "center",
    justifyContent: "center",
  },
});
 