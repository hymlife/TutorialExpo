import { StyleSheet, Text, View } from "react-native";
import { home, profile } from "./src/screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import UserCommend from "./src/screens/userCommend";
import { FontAwesome5 } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Entypo
                    name="home"
                    size={24}
                    color={focused ? "#16247d" : "#111"}
                  />
                  <Text style={{ fontSize: 20 }}>Home</Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="User Command"
          component={UserCommend}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <FontAwesome5
                    name="user-ninja"
                    size={24}
                    color={focused ? "#16247d" : "#111"}
                  />
                  <Text style={{ fontSize: 20 }}>Command</Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={profile}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <AntDesign
                    name="setting"
                    size={24}
                    color={focused ? "#16247d" : "#111"}
                  />
                  <Text style={{ fontSize: 20 }}>Setting</Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
