import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ImageLogo from "./assets/adaptive-icon.png";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Open up App.tsx to start working on your app!
      </Text>
      {/*  Image with inLine Style */}
      {/* <Image source={ImageLogo} style={{ width: 300, height: 300 }} /> */}
      {/* Image with Url  */}
      {/* <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ height: 300, width: 300 }}
      /> */}
      <ImageBackground
        source={{ uri: "https://picsum.photos/300" }}
        style={{ flex: 1 }}
      >
        <Text> Hello World </Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
