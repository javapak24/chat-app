import { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

const StartScreen = ({ navigation }) => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text>Hello {name}</Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder='Type your username here'
      />
      <Button
        title="Go to ChatScreen"
        onPress={() => navigation.navigate('ChatScreen', { name: name})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15
  }
});

export default StartScreen;