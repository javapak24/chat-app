import { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from 'react-native';

const StartScreen = ({ navigation }) => {
  //state to set name
  const [name, setName] = useState('');
  //state to set background color
  const [background, setBackground] = useState('');



  return (
    <View style={styles.container}>
      <Text>Hello {name}</Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder='Type your username here'
      />
    <View style={styles.buttonContainer}>
      <TouchableOpacity
      style={[styles.colorButton, {backgroundColor: '#FF474C'}]}
      onPress={ ()=> setBackground("#FF474C")}
      >
        <Text style={styles.buttonText}>
          Set Color!
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={[styles.colorButton, {backgroundColor: '#ADD8E6'}]}
      onPress={ ()=> setBackground("#ADD8E6")}
      >
        <Text style={styles.buttonText}>
          Set Color!
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={[styles.colorButton, {backgroundColor: '#90EE90'}]}
      onPress={ ()=> setBackground("#90EE90")}
      >
        <Text style={styles.buttonText}>
          Set Color!
        </Text>
      </TouchableOpacity>
    </View>
      <Button
        title="Go to ChatScreen"
        onPress={() => navigation.navigate('ChatScreen', { name: name, background: background})}
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
  buttonContainer: {
    flexDirection: 'row',
    flex: 1
  },
  textInput: {
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15
  },
  colorButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  buttonText: {
    padding: 20,
  }
});

export default StartScreen;