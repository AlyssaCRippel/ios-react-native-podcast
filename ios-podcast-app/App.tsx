import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './global'; 

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-100">
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar />
    </View>
  );
}
