import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useGetPodcasts } from '../data/get_podcasts';
import { Podcast } from '../data/types';
import { RootStackParamList } from '../navigation/types';

import LoadingIndicator from '../components/loading_component';
import ErrorMessage from '../components/error_component';
import PodcastCard from '../components/podcast_component';
import FeaturedPodcastCard from '../components/featured_podcast_component';
import Nav from '../components/nav_component';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PopularPodcasts'>;

export default function PodcastScreen() {
    const navigation = useNavigation<NavigationProp>();
    const { data, isLoading, error } = useGetPodcasts();
    const featured = data?.podcastSeries && data.podcastSeries.length > 0 
        ? data.podcastSeries[Math.floor(Math.random() * data.podcastSeries.length)]
        : null;

    const handlePodcastPress = (podcast: Podcast) => {
        navigation.navigate('PodcastDetails', { podcast });
    };

    if (isLoading) return <LoadingIndicator />;
    if (error) return <ErrorMessage message={error.message} />;

    return (
        <View className="flex-1 bg-gray-900 px-5 pt-12">
            <View className="mb-6">
                <Text className="text-2xl font-bold text-white">Popular Podcasts</Text>
                <Text className="text-sm text-gray-300 mt-1">Discover the latest and greatest podcasts</Text>
            </View>
            <FeaturedPodcastCard
                podcast={{
                    name: featured?.name || 'Featured Podcast',
                    description: featured?.description || 'This is a featured podcast.',
                }}
                onPress={() => featured && handlePodcastPress(featured)}
            />
            <View className="flex-row justify-between items-center mb-3">
                <Text className="text-lg font-semibold text-white">Trending Podcasts</Text>
            </View>
            <FlatList
                data={data?.podcastSeries}
                keyExtractor={(item: Podcast) => item.uuid}
                renderItem={({ item }) => (
                    <PodcastCard
                        podcast={item}
                        onPress={() => handlePodcastPress(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
            />
            <Nav />
        </View>
    );
}
