import { useState } from "react";
import { View, StatusBar, Button } from "react-native";

export default function App() {
  const [hidden, setHidden] = useState(false);

  const toggle = () => setHidden((prev) => !prev);

  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: "plum" }}>
      <StatusBar
        backgroundColor="lightgreen"
        barStyle="dark-content"
        hidden={hidden}
      />
      <Button title="Toggle Status Bar" onPress={toggle} />
    </View>
  );
}
