import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import Title from "../components/Title";

const image = {
  uri: "/Users/halilibrahimdursun/Desktop/TutorialExpo/assets/mobileBg.jpg",
};
const Home = () => {
  return (
    <ImageBackground style={styles.container} source={image} resizeMode="cover">
      <SafeAreaView style={{ backgroundColor: "#000000c0", flex: 1 }}>
        <ScrollView>
          <Title pageTitle="Home Page" />

          <ScrollView
            horizontal
            pagingEnabled
            nestedScrollEnabled
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.scroll}>
              <View style={styles.cardArea}>
                <Text>Veri1</Text>
              </View>
              <View style={styles.cardArea}>
                <Text>Veri2</Text>
              </View>
              <View style={styles.cardArea}>
                <Text>Veri3</Text>
              </View>
              <View style={styles.cardArea}>
                <Text>Veri4</Text>
              </View>
            </View>
          </ScrollView>

          <View>
            <Text style={{ color: "white" }}>Ürün Adı1</Text>
            <Text style={{ color: "white" }}>Ürün Adı1</Text>
            <Text style={{ color: "white" }}>Ürün Adı1</Text>
            <Text style={{ color: "white" }}>Ürün Adı1</Text>

            <Image />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flexDirection: "row",
  },
  cardArea: {
    width: 150,
    height: 150,
    backgroundColor: "white",
    margin: 15,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
