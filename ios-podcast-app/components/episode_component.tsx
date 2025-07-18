import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Episode } from '../data/types';

type Props = {
    episode: Episode;
    imageUrl?: string;
};

export default function Episode_Component({ episode , imageUrl }: Props) {
    return (
        <View>
            <TouchableOpacity key={episode.uuid} className="flex-row items-center py-3 border-b border-gray-800">
                <View className="w-12 h-12 bg-gray-700 rounded-lg mr-3 items-center justify-center">
                    <Image
                        source={{ uri: imageUrl || '' }}
                        className="w-full h-full rounded-lg"
                        resizeMode="cover"
                    />
                </View>
                <View className="flex-1">
                    <Text className="text-white text-sm font-medium" numberOfLines={2}>
                        {episode.name}
                    </Text>
                    <Text className="text-gray-400 text-xs mt-1">
                        {episode.description ? episode.description.substring(0, 50) + '...' : 'No description available'}
                    </Text>
                </View>
                <TouchableOpacity className="ml-3 p-2">
                    <Text className="text-white text-lg">▶</Text>
                </TouchableOpacity>
                <TouchableOpacity className="ml-2 p-2">
                    <Text className="text-gray-400 text-lg">⋯</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    );
}
