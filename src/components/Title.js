import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const Title = ({ pageTitle }) => {
  return (
    <View style={styles.title}>
      <TouchableOpacity>
        <Entypo name="menu" size={30} color="white" />
      </TouchableOpacity>
      <Text style={styles.titleFont}>{pageTitle}</Text>
      <Image
        style={styles.img}
        source={{
          uri: "https://reactjs.org/logo-og.png",
        }}
      />
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginVertical: 15,
  },
  titleFont: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  img: {
    width: 35,
    height: 35,
    borderRadius: 55,
  },
});
