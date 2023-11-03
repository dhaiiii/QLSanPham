import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { firestore } from "./config/firebase";
import axios from "axios";

const Homes = (props) => {
  const [isLoading, setisLoading] = useState(true);
  const [dssp, setdssp] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.navigate("Search", { searchQuery });
  };

  // useEffect(() => {
  //   const unsubscribe = firestore()
  //     .collection("addProduct")
  //     .onSnapshot((querySnapshot) => {
  //       const products = [];
  //       querySnapshot.forEach((documentSnapshot) => {
  //         products.push({
  //           id: documentSnapshot.id,
  //           ...documentSnapshot.data(),
  //         });
  //       });
  //       setdssp(products);
  //       setisLoading(false);
  //     });

  //   return () => unsubscribe();
  // }, []);

  return (
    <View style={styles.dssp}>
      <Text style={styles.heading}>Danh sách sản phẩm</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      <FlatList
        data={dssp}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              // Thay đổi trạng thái màn hình hiện tại sang màn hình "Product" và truyền `productData`
              navigation.navigate("ProductDetail", {
                productDetailData: item,
              });
            }}
            style={styles.productContainer}
          >
            <Text>{index + 1}</Text>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text>{item.address}</Text>
            <Image
              source={{ uri: item.Image }}
              style={{
                width: 100,
                height: 80,
                marginLeft: 270,
                bottom: 60,
              }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dssp: {
    backgroundColor: "white",
    flex: 1,
  },
  productContainer: {
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: "white",
    height: 120,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 100,
    color: "red",
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    padding: 10,
    height: 40,
  },
  searchButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: "green",
    borderRadius: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 100,
    color: "red",
  },
  sear: {
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: "white",
    height: 80,
  },
  searchContainer: {},
});

export default Homes;
