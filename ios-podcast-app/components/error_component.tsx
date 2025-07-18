import { View, Text } from 'react-native';

type Props = {
  message?: string;
};

export default function Error_Component({ message }: Props) {
  return (
    <View className="flex-1 justify-center items-center bg-gray-900 px-5">
      <Text className="text-lg text-red-400 font-semibold">Error loading podcasts</Text>
      {message && (
        <Text className="text-sm text-gray-300 mt-2 text-center">
          {message}
        </Text>
      )}
    </View>
  );
}
