import { View, Text, Pressable } from 'react-native';

type Props = {
  podcast: {
    name: string;
    description: string;
    author?: string;
  };
};

export default function Featured_Podcast_Component({ podcast }: Props) {
  return (
    <View className="bg-blue-500 rounded-2xl p-5 mb-6">
      <Text className="text-sm text-white uppercase">Featured</Text>
      <Text className="text-xl font-bold text-white mt-1">{podcast.name}</Text>
      <Text className="text-white mt-1">{podcast.author ?? 'by Unknown Creator'}</Text>
      <Text className="text-white mt-2" numberOfLines={3}>{podcast.description}</Text>
    </View>
  );
}
