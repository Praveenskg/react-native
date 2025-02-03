import { StatusBar } from "expo-status-bar";
import { View, Button, Image, Text, Pressable } from "react-native";
import LogoImg from "./assets/splash-icon.png";
export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: 45, paddingHorizontal: 10 }}>
      <Button
        title="Click Me"
        onPress={() => console.log("Btn clicked")}
        color="midnightblue"
        disabled
      />
      <Pressable
        onPress={() => console.log("Images Pressed")}
        onPressOut={() => console.log("Onpress Out")}
        onLongPress={() => console.log("Holded for 500 millisecond")}
      >
        <Image
          source={LogoImg}
          style={{ height: 300, width: 300, paddingVertical: 10 }}
        />
      </Pressable>
      <Pressable onPress={() => console.log("Text Pressed")}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          itaque labore optio laboriosam, tempora exercitationem rem. Culpa
          quae, ea at dolor assumenda consequatur corporis quaerat voluptate,
          corrupti iste, similique voluptates omnis voluptatibus recusandae sit
          distinctio rerum! Sunt cum eos nostrum rerum saepe, dolorem debitis
          dolorum quasi amet ad rem iure.
        </Text>
      </Pressable>
      <StatusBar />
    </View>
  );
}
