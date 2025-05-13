import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button, StyleSheet } from "react-native";

export default function Screen1() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Screen 1</ThemedText>
      <Button title="Login" />
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
