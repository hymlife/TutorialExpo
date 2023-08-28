import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Title from "../components/Title";

const image = {
  uri: "/Users/halilibrahimdursun/Desktop/TutorialExpo/assets/mobileBg.jpg",
};
const home = () => {
  return (
    <ImageBackground style={styles.container} source={image} resizeMode="cover">
      <SafeAreaView style={{ backgroundColor: "#000000c0", flex: 1 }}>
        <Title pageTitle="Home Page" />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
