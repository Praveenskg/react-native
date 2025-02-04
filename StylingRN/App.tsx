import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
        <Text>Lightblue Box</Text>
      </View>
      <View style={[styles.box, styles.lightGreenBg, styles.androidShadow]}>
        <Text>LightGreen Box</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: "#f5f5f5",
  },
  box: {
    width: 250,
    height: 250,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    // margin: 10,
    marginHorizontal: 2,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "pink",
    borderRadius: 5,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightGreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "#0000ff",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10,
  },
});
