import { StyleSheet, View } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#FF5733" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#33FF57" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#3357FF" }}>Box 3</Box>
      <Box style={{ backgroundColor: "#FF33A8" }}>Box 4</Box>
      <Box style={{ backgroundColor: "#FFD700" }}>Box 5</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 4,
    borderColor: "red",
  },
});
