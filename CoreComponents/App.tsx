import { View, Alert, Button } from "react-native";
import Greet from "./components/Greet";

export default function App() {
  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: "#dadada" }}>
     <Greet name="Praveen" />
     <Greet name="Pranjal" />
    </View>
  );
}
