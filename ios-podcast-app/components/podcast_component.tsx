import { View, Text, Image, Pressable } from 'react-native';
import { Podcast } from '../data/types';

type Props = {
  podcast: Podcast;
  onPress?: () => void;
};

export default function Podcast_Component({ podcast, onPress }: Props) {
  return (
    <Pressable onPress={onPress} className="flex-row items-center mb-5 p-3 rounded-xl bg-gray-800 shadow-md">
      <View className="w-16 h-16 rounded-xl bg-gray-300 justify-center items-center mr-4">
        <Text className="text-gray-700 text-1xl">image</Text>
      </View>
      <View className="flex-1">
        <Text className="text-base font-semibold text-white" numberOfLines={1}>
          {podcast.name}
        </Text>
        <Text className="text-sm text-gray-300" numberOfLines={2}>
          {podcast.description}
        </Text>
      </View>
    </Pressable>
  );
}
