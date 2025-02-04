import { View, Text } from "react-native";

type GreetProps = {
  name: string;
};
export default function Greet({ name }: GreetProps) {
  return (
    <View>
      <Text>Hello , {name}</Text>
    </View>
  );
}
