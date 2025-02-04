import { View, Text, StyleSheet, ViewStyle, StyleProp } from "react-native";

type BoxProps = {
  children: string;
  style?: StyleProp<ViewStyle>;
};
export default function Box({ children, style }: BoxProps) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    padding: 20,
    height: 50,
    width:50
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
