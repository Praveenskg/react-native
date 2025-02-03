import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ImageLogo from "./assets/adaptive-icon.png";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/*   Static Image with inLine Style */}
        <Image source={ImageLogo} style={{ width: 300, height: 300 }} />
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          facilis quae dolore error eligendi explicabo provident vero architecto
          sapiente quam! A fuga totam optio aliquam? Id corporis ducimus nisi
          blanditiis, natus sint, unde adipisci voluptatibus, provident nam
          autem fugit. A id ullam, quidem, quos neque impedit, eius officia
          possimus nihil quaerat commodi vitae hic! Eum autem nesciunt similique
          ullam libero illo explicabo quidem quia laborum animi blanditiis modi
          eveniet facilis adipisci, asperiores id sit ut. Illum voluptatum
          reprehenderit dignissimos reiciendis, temporibus nemo? Error numquam
          nihil, sint asperiores blanditiis porro? Nam nobis assumenda cumque
          nisi at nostrum velit veritatis, beatae neque! Quos veritatis,
          quisquam cum doloremque nihil excepturi sunt, atque harum dolore dicta
          explicabo! Quisquam hic earum laudantium dignissimos provident illo
          saepe voluptatem accusamus in exercitationem recusandae dolor nemo
          iusto velit tenetur consectetur quas sapiente doloribus cumque, minima
          asperiores deserunt ipsum quidem! Inventore aut saepe nam. Provident,
          amet! Eligendi atque neque ea dolorum adipisci, optio quo
          exercitationem eaque error iste porro hic ducimus reprehenderit alias
          sint! Voluptas necessitatibus ea eum doloremque illo sint, est nostrum
          placeat dolores animi sequi hic nulla optio adipisci reprehenderit
          laborum fuga autem asperiores quod inventore iusto aliquam
          consequuntur cumque incidunt. Excepturi labore amet molestias
          recusandae ullam! Nesciunt quasi dolores voluptas porro quis vero
          dolor quod, aliquid ea voluptatum molestiae dignissimos corporis nam
          omnis maxime veniam tempora tempore obcaecati fugiat similique nulla
          cupiditate expedita. Laborum sunt, aliquam similique corrupti soluta
          et itaque praesentium minima iste excepturi quidem tempore iure quasi
          quas!
        </Text>
        <Image source={ImageLogo} style={{ width: 300, height: 300 }} />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
