import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notifications</Text>
      <Text style={styles.notificationText}>
        No new notifications at the moment.
      </Text>
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
  notificationText: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default NotificationScreen;
