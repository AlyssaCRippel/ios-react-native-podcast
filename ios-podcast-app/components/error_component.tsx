import { View, Text } from 'react-native';

type Props = {
  message?: string;
};

export default function Error_Component({ message }: Props) {
  return (
    <View className="flex-1 justify-center items-center bg-white px-5">
      <Text className="text-lg text-red-500 font-semibold">Error loading podcasts</Text>
      {message && (
        <Text className="text-sm text-gray-600 mt-2 text-center">
          {message}
        </Text>
      )}
    </View>
  );
}
