import { View, Text, ActivityIndicator } from 'react-native';

export default function Loading_Component() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <ActivityIndicator size="large" color="#4B5563" />
      <Text className="text-lg text-gray-700 mt-3">Loading...</Text>
    </View>
  );
}
