import React from "react";
import { Text, View, StyleSheet, TextInput, Image, Button } from "react-native";

const ProductDetail = ({ route }) => {
  const { productDetailData } = route.params;
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
        <View style={styles.btn1}>
          <Button title="mua hàng" style={styles.btn} />
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
    top: 200,
  },
});
