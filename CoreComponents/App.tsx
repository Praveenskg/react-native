import { View, Alert, Button } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: "#dadada" }}>
      <Button title="alert" onPress={() => Alert.alert("Invalid Data")} />
      <Button
        title="alert"
        onPress={() => Alert.alert("Invalid Data", "DOB Missing")}
      />
      <Button
        title="alert 3"
        onPress={() =>
          Alert.alert("Invalid Data", "DOB Missing", [
            {
              text: "Cancel",
              onPress: () => console.log("cancel pressed"),
            },
            {
              text: "Ok",
              onPress: () => console.log("Ok Pressed"),
            },
          ])
        }
      />
    </View>
  );
}
