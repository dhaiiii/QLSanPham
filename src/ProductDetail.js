import React from "react";
import { Text, View, StyleSheet, TextInput, Image, Button } from "react-native";
import Carts from "./Cart";
import Messages from "./Message";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const ProductDetail = ({ route, navigation }) => {
  const { productDetailData } = route.params;

  const handleCart = () => {
    navigation.navigate("Cart");
  };
  const handleMessage = () => {
    navigation.navigate("Message");
  };
  const handleBuy = () => {
    navigation.navigate("Buy", { buyData: productDetailData });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chi tiết sản phẩm</Text>
      <View style={styles.productDetailContainer}>
        <Text style={styles.productDetailText}>
          Tên sản phẩm: {productDetailData.name}
        </Text>
        <Text style={styles.productDetailText}>
          Giá sản phẩm: {productDetailData.price}
        </Text>
        <Text style={styles.productDetailText}>
          Địa chỉ: {productDetailData.address}
        </Text>
        <Text style={styles.productDetailText}>
          Giới thiệu sản phẩm:{"\n"} {productDetailData.info}
        </Text>
        <Image
          source={{ uri: productDetailData.Image }}
          style={styles.productDetailImage}
        />
        <View style={styles.btn2}>
          <View style={styles.btn1}>
            <Button
              onPress={handleMessage}
              title="nhắn tin"
              style={styles.btn}
            />
          </View>
          <View style={styles.btn1}>
            <Button onPress={handleCart} title="giỏ hàng" style={styles.btn} />
          </View>
          <View style={styles.btn1}>
            <Button onPress={handleBuy} title="mua hàng" style={styles.btn} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

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
  productDetailContainer: {
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
  productDetailImage: {
    top: 30,
    width: "100%",
    height: 200,
  },
  btn1: {
    top: 350,
    flex: 1, // Chia đều khoảng trống cho các nút
    margin: 5,
  },
  btn2: {
    flexDirection: "row", // Xếp theo hàng ngang
    justifyContent: "space-between", // Canh đều các phần tử
  },
});
