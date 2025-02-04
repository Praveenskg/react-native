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
      <Box style={{ backgroundColor: "#FF33A8" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#FFD700" }}>Box 7</Box>
    </View>
    // <View style={{ backgroundColor: "plum", flex: 1 }}> </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "row",
    flexWrap: "wrap",
    height: 300,
    // rowGap: 20,
    // columnGap: 20,
    gap:20,
    marginTop: 64,
    borderWidth: 4,
    borderColor: "green",
  },
});
