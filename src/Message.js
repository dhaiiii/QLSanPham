import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  // Simulated user for demonstration
  const user = {
    _id: 1,
    name: "User",
    avatar: "https://placeimg.com/140/140/any",
  };

  useEffect(() => {
    // Load initial chat messages
    setMessages([
      {
        _id: 1,
        text: "Hello!",
        createdAt: new Date(),
        user: user,
      },
      {
        _id: 2,
        text: "Hi there!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Friend",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat messages={messages} onSend={onSend} user={user} />
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
