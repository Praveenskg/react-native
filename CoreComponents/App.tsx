import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Button, Modal, Text } from "react-native";
export default function App() {
  const [isModalVisible, SetIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: "plum" }}>
      <Button
        title="Click Me"
        onPress={() => SetIsModalVisible(true)}
        color="midnightblue"
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => SetIsModalVisible(false)}
        animationType="slide" // fade , none , slide
        presentationStyle="pageSheet" // pageSheet, formSheet
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text> Modal Content </Text>
          <Button
            title="Close Modal"
            color=" midnightblue"
            onPress={() => SetIsModalVisible(false)}
          />
        </View>
      </Modal>
      <StatusBar />
    </View>
  );
}
