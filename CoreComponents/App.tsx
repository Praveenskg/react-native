import { StatusBar } from "expo-status-bar";
import { View, Button } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: 45, paddingHorizontal: 10 }}>
      <Button
        title="Click Me"
        onPress={() => console.log("Btn clicked")}
        color="midnightblue"
        disabled
      />
      <StatusBar />
    </View>
  );
}
