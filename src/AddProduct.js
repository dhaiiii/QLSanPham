import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ImageView,
  StyleSheet,
} from "react-native";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { firestore } from "./config/firebase";
import axios from "axios";

const Add = ({ navigation, route }) => {
  const [tenSP, settenSP] = useState("");
  const [giaSP, setgiaSP] = useState(0);
  const [address, setaddress] = useState("");
  const [introduce, setintroduce] = useState("");
  const [linkAnh, setLinkAnh] = useState("");

  useEffect(() => {
    if (route.params?.refresh) {
      // Làm mới trường nhập liệu
      settenSP("");
      setgiaSP(0);
      setaddress("");
      setinfoSP("");
      setintroduce("");
      setLinkAnh("");
    }
  }, [route.params?.refresh]);

  const SaveProduct = () => {
    const objSP = {
      name: tenSP,
      price: giaSP,
      address: address,
      info: introduce,
      Image: linkAnh,
    };

    const handleaddProduct = async () => {
      try {
        console.log("add ");
        const response = await axios.post(
          "http://192.168.61.101:3000/api/userLogin",
          {
            username,
            passwd,
          }
        );
        console.log("OK");
        console.log(response.data);
        if (response.status === 200) {
          Alert.alert("Đăng nhập thành công!");
          navigation.navigate("Home");
        }
      } catch (error) {
        console.error(error);
      }
    };
  };

  return (
    <View>
      <Text style={{ marginLeft: 170, color: "red", fontSize: 20 }}>
        Thêm sp
      </Text>
      <View style={styles.productContainer}>
        <TextInput
          placeholder="Tên Sp"
          onChangeText={(txt) => {
            settenSP(txt);
          }}
        />

        <TextInput
          placeholder="Giá Sp"
          onChangeText={(txt) => {
            setgiaSP(txt);
          }}
        />
        <TextInput
          placeholder="Địa chỉ"
          onChangeText={(txt) => {
            setaddress(txt);
          }}
        />
        <TextInput
          placeholder="Giới thiệu sản phẩm"
          onChangeText={(txt) => {
            setintroduce(txt);
          }}
        />
        <TextInput
          placeholder="Link ảnh sản phẩm"
          onChangeText={(txt) => {
            setLinkAnh(txt);
          }}
        />
      </View>

      <Button title="Save" onPress={SaveProduct} />
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  productContainer: {
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: "white",
  },
});
