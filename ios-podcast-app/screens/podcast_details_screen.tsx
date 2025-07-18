import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { Podcast, Episode } from '../data/types';

import Nav from '../components/nav_component';
import Episode_Component from '../components/episode_component';
import LoadingIndicator from '../components/loading_component';
import ErrorMessage from '../components/error_component';
import { useGetPodcastDetails } from '../data/get_podcast_details';

type PodcastDetailsRouteProp = RouteProp<RootStackParamList, 'PodcastDetails'>;
type PodcastDetailsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PodcastDetails'>;

export default function PodcastDetailsScreen() {
    const route = useRoute<PodcastDetailsRouteProp>();
    const navigation = useNavigation<PodcastDetailsNavigationProp>();
    const { podcast } = route.params;
    const { data, isLoading, error } = useGetPodcastDetails(podcast.uuid);

    if (isLoading) return <LoadingIndicator />;
    if (error) return <ErrorMessage message={error.message} />;

    return (
        <View className="flex-1 bg-gray-900">
            <View className="flex-row items-center px-4 pt-12 pb-4 relative">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className="p-2 rounded-full"
                >
                    <Text className="text-white text-lg">←</Text>
                </TouchableOpacity>
            </View>

            <ScrollView className="flex-1">
                {/* Podcast Image and Title */}
                <View className="items-center px-8 mb-6">
                    <View className="w-64 h-64 mb-6 rounded-lg overflow-hidden bg-gray-800">
                        {data?.imageUrl ? (
                            <Image
                                source={{ uri: data.imageUrl }}
                                className="w-full h-full"
                                resizeMode="cover"
                            />
                        ) : (
                            <View className="w-full h-full bg-orange-500 items-center justify-center">
                                <Text className="text-white text-6xl">🎧</Text>
                            </View>
                        )}
                    </View>

                    <Text className="text-white text-2xl font-bold text-center mb-2">{podcast.name}</Text>
                </View>
                <View className="px-8 mb-6">
                    <Text className="text-gray-300 text-sm leading-5">{podcast.description}</Text>
                </View>
                <View className="px-8 mb-6">
                    <View className="flex-row justify-between items-center mb-4">
                        <Text className="text-white text-lg font-semibold">Episodes</Text>
                        <TouchableOpacity>
                            <Text className="text-blue-400 text-sm">See All</Text>
                        </TouchableOpacity>
                    </View>
                    {data?.episodes.slice(0, 5).map((episode: Episode, uuid: number) => (
                        <Episode_Component
                            key={uuid}
                            episode={episode}
                            imageUrl={data?.imageUrl}
                        />
                    ))}
                </View>
            </ScrollView>
            <Nav />
        </View>

    );
}
