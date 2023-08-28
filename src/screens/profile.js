import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import Title from "../components/Title";

const image = {
  uri: "/Users/halilibrahimdursun/Desktop/TutorialExpo/assets/mobileBg.jpg",
};
const profile = () => {
  return (
    <ImageBackground style={styles.container} source={image} resizeMode="cover">
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#000000c0",
        }}
      >
        <Title pageTitle={"Profile"} />
        <View style={styles.profileBar}>
          <Image
            style={styles.image}
            source={{
              uri: "https://halilibrahimdursun.com.tr/wp-content/uploads/2023/05/IMG_7418-scaled.jpg",
            }}
          />

          <Text style={styles.username}>Halil İbrahim Dursun</Text>
        </View>
        <View style={styles.buttonsArea}>
          <View style={styles.littleArea}>
            <Feather name="settings" size={24} color="white" />
            <Text style={styles.username}>Ayarlar</Text>
          </View>

          <View style={styles.littleArea}>
            <Entypo name="drive" size={24} color="white" />
            <Text style={styles.username}>Yedekleme </Text>
          </View>
          <View style={styles.littleArea}>
            <AntDesign name="user" size={24} color="white" />
            <Text style={styles.username}>Kullanıcı Ayarları</Text>
          </View>

          <View style={styles.littleArea}>
            <MaterialIcons name="security" size={24} color="white" />
            <Text style={styles.username}>Güvenlik </Text>
          </View>

          <View style={styles.littleArea}>
            <Entypo name="wallet" size={24} color="white" />
            <Text style={styles.username}>Ödeme</Text>
          </View>
          <View style={styles.littleArea}>
            <Feather name="settings" size={24} color="white" />
            <Text style={styles.username}>Uygulama Ayarları</Text>
          </View>

          <View style={styles.littleArea}>
            <AntDesign name="logout" size={24} color="white" />
            <Text style={styles.username}>Çıkış Yap </Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: "black",
  },
  profileBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  image: {
    marginLeft: 15,
    width: 100,
    height: 100,
    borderRadius: 55,
  },
  username: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  textArea: { justifyContent: "center", marginLeft: 15 },

  buttonsArea: {
    flex: 5,
    marginTop: 55,
    justifyContent: "flex-end",
  },

  littleArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 25,
    marginHorizontal: 35,
  },
});
