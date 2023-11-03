import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Carts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cart</Text>
      <Text style={styles.cartText}>Your shopping cart is empty.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cartText: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Carts;
