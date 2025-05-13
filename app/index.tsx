import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { Button, StyleSheet } from "react-native";

export default function Screen1() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Screen 1</ThemedText>
      <Link href="/screen" asChild>
        <Button title="Login" />
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
