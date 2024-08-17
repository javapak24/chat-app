import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

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