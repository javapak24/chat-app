import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from './components/Start';
import Chat from './components/Chat';

const Stack = createNativeStackNavigator();

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { initializeApp } from "firebase/app";
import { getFirestore, disableNetwork, enableNetwork } from "firebase/firestore";

import { useNetInfo }from '@react-native-community/netinfo';

export default function App() {

  const connectionStatus = useNetInfo();  

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  const firebaseConfig = {
    apiKey: "AIzaSyD4fKJb2ea7pT0MgPzOjNr6j3vtoGhEyx0",
    authDomain: "chat-app-f5b00.firebaseapp.com",
    projectId: "chat-app-f5b00",
    storageBucket: "chat-app-f5b00.appspot.com",
    messagingSenderId: "288862785320",
    appId: "1:288862785320:web:fda66b3a0d1746685eca1d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={Start}/>
        <Stack.Screen
          name="Chat">
            {props => <Chat isConnected={connectionStatus.isConnected} db={db} {...props}/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
