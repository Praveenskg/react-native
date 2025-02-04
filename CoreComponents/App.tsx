import { View, ActivityIndicator } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: "#dadada" }}>
      <ActivityIndicator />
      <ActivityIndicator
        size="large" // large , small
      />
      <ActivityIndicator color="midnightblue" animating />
    </View>
  );
}
