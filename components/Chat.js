import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { GiftedChat } from "react-native-gifted-chat";

const Chat = () => {
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

  const onSend = (newMessages) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1
      }}
    />
  )
}

const ChatScreen = ({ route, navigation }) => {
  const { name , background } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: name, color: background });
  }, []);

 return (
   <View style={[styles.container,
   {backgroundColor: background}]}>
     <Text>Hello {name}!</Text>
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ChatScreen;