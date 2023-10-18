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

const Home = (props) => {
  const [isLoading, setisLoading] = useState(true);
  const [dssp, setdssp] = useState([]);
  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.navigate("Search");
  };

  useEffect(() => {
    const unsubscribe = firestore()
      .collection("addProduct")
      .onSnapshot((querySnapshot) => {
        const products = [];
        querySnapshot.forEach((documentSnapshot) => {
          products.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setdssp(products);
        setisLoading(false);
      });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.dssp}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Text style={styles.heading}>Danh sách sản phẩm</Text>
          <TouchableOpacity onPress={handleSearch}>
            <Text>Search</Text>
          </TouchableOpacity>

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

export default Home;
