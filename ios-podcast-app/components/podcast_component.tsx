import { View, Text, Image } from 'react-native';
import { Podcast } from '../data/types';

type Props = {
  podcast: Podcast;
};

export default function Podcast_Component({ podcast }: Props) {
  return (
    <View className="flex-row items-center mb-5 p-3 rounded-xl bg-blue-100 shadow-md">
      <View className="w-16 h-16 rounded-xl bg-gray-300 justify-center items-center mr-4">
        <Text className="text-xs text-gray-600">Image</Text>
      </View>
      <View className="flex-1">
        <Text className="text-base font-semibold text-black" numberOfLines={1}>
          {podcast.name}
        </Text>
        <Text className="text-sm text-gray-500" numberOfLines={2}>
          {podcast.description}
        </Text>
      </View>
    </View>
  );
}
