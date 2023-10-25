import React from "react";
import { Text, View, StyleSheet, TextInput, Image, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Buys = ({ route }) => {
  const { buyData } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thanh toán</Text>
      <View style={styles.buyContainer}>
        <Text style={styles.buyText}>Địa chỉ nhận hàng: {buyData.name}</Text>
        <Text style={styles.buyText}>Tên sản phẩm: {buyData.name}</Text>
        <Text style={styles.buyText}>Giá sản phẩm: {buyData.price}</Text>
        <Text style={styles.buyText}>Địa chỉ: {buyData.address}</Text>
        <Text style={styles.buyText}>
          Giới thiệu sản phẩm:{"\n"} {buyData.info}
        </Text>
        <Image source={{ uri: buyData.Image }} style={styles.buyImage} />

        <Button title="Thanh toán" onPress={""} style={styles.btnn} />
      </View>
    </View>
  );
};

export default Buys;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  title: {
    marginLeft: 10,
    color: "red",
    fontSize: 20,
    marginLeft: 120,
  },
  buyContainer: {
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: "white",
    height: 720,
  },
  productText: {
    fontSize: 16,
    marginBottom: 10,
  },
  buyImage: {
    top: 30,
    width: "100%",
    height: 200,
  },
  btnn: {
    top: 500,
    borderRadius: 30,
  },
});
