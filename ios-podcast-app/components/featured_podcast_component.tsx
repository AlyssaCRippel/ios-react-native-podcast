import { View, Text, Pressable } from 'react-native';

type Props = {
  podcast: {
    name: string;
    description: string;
    author?: string;
  };
  onPress?: () => void;
};

export default function Featured_Podcast_Component({ podcast, onPress }: Props) {
  return (
    <Pressable onPress={onPress} className="bg-gray-300 rounded-2xl p-5 mb-6">
      <Text className="text-sm text-gray-800 uppercase">Featured</Text>
      <Text className="text-xl font-bold text-gray-800 mt-1">{podcast.name}</Text>
      <Text className="text-gray-700 mt-1">{podcast.author ?? 'by Unknown Creator'}</Text>
      <Text className="text-gray-700 mt-2" numberOfLines={3}>{podcast.description}</Text>
    </Pressable>
  );
}
