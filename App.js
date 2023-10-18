import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginScreen from "./src/Login";
import RegisterScreen from "./src/Register";
import HomeScreen from "./src/Home";
import ForgotPassword from "./src/Forgotpw";
import Add from "./src/AddProduct";
import Searchs from "./src/Search";
import Logouts from "./src/Logout";
import Infomation from "./src/Info";
import Notifica from "./src/Notification";
import Carts from "./src/Cart";
import ViewInfo from "./src/ViewInfo";
import ProductDetail from "./src/ProductDetail";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("Login");
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.boxIcon}>
              <MaterialCommunityIcons
                name="home-account"
                color={focused ? "black" : color}
                size={size}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Carts}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.boxIcon}>
              <MaterialCommunityIcons
                name="cart-arrow-right"
                color={focused ? "black" : color}
                size={size}
              />
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="Search"
        component={Searchs}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.boxIcon}>
              <MaterialCommunityIcons
                name="magnify"
                color={focused ? "black" : color}
                size={size}
              />
            </View>
          ),
        }}
      /> */}
      <Tab.Screen
        name="AddProduct"
        component={Add}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.boxIcon}>
              <MaterialCommunityIcons
                name="plus-box"
                color={focused ? "black" : color}
                size={size}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Nofitication"
        component={Notifica}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.boxIcon}>
              <MaterialCommunityIcons
                name="bell"
                color={focused ? "black" : color}
                size={size}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Info"
        component={Infomation}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.boxIcon}>
              <MaterialCommunityIcons
                name="account"
                color={focused ? "black" : color}
                size={size}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={Logouts}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.boxIcon}>
              <MaterialCommunityIcons
                name="logout"
                color={focused ? "black" : color}
                size={size}
                onPress={handleLogout} // Gọi hàm handleLogout khi bấm vào nút Logout
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Forgotpw" component={ForgotPassword} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="ViewInfo" component={ViewInfo} />
        <Stack.Screen name="Search" component={Searchs} />
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator} // Sử dụng BottomTabNavigator là một trong các màn hình
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  boxIcon: {
    alignItems: "center",
  },
  showTxt: {
    display: "flex",
  },
  hiddenTxt: {
    display: "none",
  },
});
