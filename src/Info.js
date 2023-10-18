import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { firestore } from "./config/firebase";

function Infomation(route) {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [birth, setBirth] = useState(0);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [gender, setGender] = useState("");

  const SaveInfo = () => {
    const info = {
      username: username,
      address: address,
      avatar: avatar,
      birth: birth,
      email: email,
      phone: phone,
      gender: gender,
    };

    firestore()
      .collection("infomation")
      .add(info)
      .then(() => {
        Alert.alert("Thành công", "Thông tin cá nhân đã được thêm");
      })
      .catch((error) => {
        console.log("Không thêm được thông tin", error);
        Alert.alert("Lỗi", "Đã xảy ra lỗi khi thêm thông tin cá nhân");
      });
  };
  return (
    <View>
      <Text style={{ marginLeft: 120, color: "red", fontSize: 20 }}>
        Thông tin cá nhân
      </Text>
      <View style={styles.productContainer}>
        <View style={styles.inputRow}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Tên Người dùng"
              onChangeText={(txt) => {
                setUsername(txt);
              }}
            />
            <Image
              source={require("/Testlan12/MyApp/src/image/sua.png")}
              style={styles.icon}
            />
          </View>
        </View>
        <View style={styles.inputRow}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Địa chỉ"
              onChangeText={(txt) => {
                setAddress(txt);
              }}
            />
            <Image
              source={require("/Testlan12/MyApp/src/image/sua.png")}
              style={styles.icon}
            />
          </View>
        </View>
        <View style={styles.inputRow}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Link ảnh sản phẩm"
              onChangeText={(txt) => {
                setAvatar(txt);
              }}
            />
            <Image
              source={require("/Testlan12/MyApp/src/image/sua.png")}
              style={styles.icon}
            />
          </View>
        </View>
        <View style={styles.inputRow}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Ngày sinh  "
              onChangeText={(txt) => {
                setBirth(txt);
              }}
            />
            <Image
              source={require("/Testlan12/MyApp/src/image/sua.png")}
              style={styles.icon}
            />
          </View>
        </View>
        <View style={styles.inputRow}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="email"
              onChangeText={(txt) => {
                setEmail(txt);
              }}
            />
            <Image
              source={require("/Testlan12/MyApp/src/image/sua.png")}
              style={styles.icon}
            />
          </View>
        </View>
        <View style={styles.inputRow}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="sdt"
              onChangeText={(txt) => {
                setPhone(txt);
              }}
            />
            <Image
              source={require("/Testlan12/MyApp/src/image/sua.png")}
              style={styles.icon}
            />
          </View>
        </View>
        <View style={styles.inputRow}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="giới tính"
              onChangeText={(txt) => {
                setGender(txt);
              }}
            />
            <Image
              source={require("/Testlan12/MyApp/src/image/sua.png")}
              style={styles.icon}
            />
          </View>
        </View>
      </View>

      <Button title="Save" onPress={SaveInfo} style={styles.btn} />
    </View>
  );
}

export default Infomation;

const styles = StyleSheet.create({
  productContainer: {
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    padding: 10,
    margin: 10,

    backgroundColor: "white",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 5,
    padding: 10,
    margin: 5,
    flex: 1,
  },
  icon: {
    width: 20,
    height: 20,
  },
  btn: {
    width: 100,
  },
});
