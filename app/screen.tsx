import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { Button, StyleSheet } from "react-native";

export default function Screen2() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Screen 2</ThemedText>
      <Link href="/">
        <Button title="Logout" />
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
});
