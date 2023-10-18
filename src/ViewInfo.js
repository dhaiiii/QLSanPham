import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { firestore } from "./config/firebase";

const ViewInfo = (route) => {
  const [isLoading, setisLoading] = useState(true);
  const [info, setInfo] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = firestore()
      .collection("infomation")
      .onSnapshot((querySnapshot) => {
        const infomations = [];
        querySnapshot.forEach((documentSnapshot) => {
          infomations.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setInfo(infomations);
        setisLoading(false);
      });

    return () => unsubscribe();
  }, []);

  const imageUrl = route.params?.imageUrl;

  return (
    <View style={styles.info}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Text style={{ color: "red", marginLeft: 110, fontSize: 25 }}>
            Thông tin cá nhân
          </Text>
          {imageUrl && (
            <Image source={{ uri: imageUrl }} style={styles.avatarImage} />
          )}
          <FlatList
            data={info}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.productContainer}>
                <View style={styles.textBorder}>
                  <Text>{`Tên Người dùng: ${item.username}`}</Text>
                </View>
                <View style={styles.textBorder}>
                  <Text>{`Địa chỉ: ${item.address}`}</Text>
                </View>
                <View style={styles.textBorder}>
                  <Text>{`Ngày sinh: ${item.birth}`}</Text>
                </View>
                <View style={styles.textBorder}>
                  <Text>{`Email: ${item.email}`}</Text>
                </View>
                <View style={styles.textBorder}>
                  <Text>{`Số điện thoại: ${item.phone}`}</Text>
                </View>
                <View style={styles.textBorder}>
                  <Text>{`Giới tính: ${item.gender}`}</Text>
                </View>
              </View>
            )}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dssp: {
    backgroundColor: "white",
    flex: 1,
  },
  itemContainer: {
    // Add a new style for each item
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: "white",
  },
  textBorder: {
    borderWidth: 1,
    borderColor: "blue", // Change border color for text items
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
});

export default ViewInfo;
