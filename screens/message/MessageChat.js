import React, { useState, useCallback, useEffect } from "react";
import { TouchableOpacity, Dimensions, ScrollView, View } from "react-native";
import styled from "styled-components/native";
import { GiftedChat } from "react-native-gifted-chat";
import TopBarBack from "../../components/topBar/TopBarBack";

const screenHeight = Dimensions.get("window").height;

function MessageChat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <View
      style={{
        height: screenHeight,
        backgroundColor: "rgba(255, 255, 255, 1)",
        paddingTop: 24,
      }}
    >
      <TopBarBack />

      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
}

export default MessageChat;
