import { View, Text, ActivityIndicator } from 'react-native';

export default function Loading_Component() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-900">
      <ActivityIndicator size="large" color="#F97316" />
      <Text className="text-lg text-gray-300 mt-3">Loading...</Text>
    </View>
  );
}
