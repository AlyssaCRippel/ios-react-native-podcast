import { View, Text, FlatList } from 'react-native';
import { useGetPodcasts } from '../data/get_podcasts';
import { Podcast } from '../data/types';

import LoadingIndicator from '../components/loading_component';
import ErrorMessage from '../components/error_component';
import PodcastCard from '../components/podcast_component';
import FeaturedPodcastCard from '../components/featured_podcast_component';
import Nav from '../components/nav_component';


export default function PodcastScreen() {
    const { data, isLoading, error } = useGetPodcasts();
    const featured = data?.podcastSeries[Math.floor(Math.random() * data.podcastSeries.length)];
    //console.log('Podcasts data:', data);

    if (isLoading) return <LoadingIndicator />;
    if (error) return <ErrorMessage message={error.message} />;

    return (
        <View className="flex-1 bg-white px-5 pt-12">
            <View className="mb-6">
                <Text className="text-2xl font-bold text-black">Popular Podcasts</Text>
                <Text className="text-sm text-gray-600 mt-1">Discover the latest and greatest podcasts</Text>
            </View>
            <FeaturedPodcastCard podcast={{
                name: featured?.name || 'Featured Podcast',
                description: featured?.description || 'This is a featured podcast.',
            }} />
            <View className="flex-row justify-between items-center mb-3">
                <Text className="text-lg font-semibold text-black">Trending Podcasts</Text>
            </View>
            <FlatList 
                data={data?.podcastSeries}
                keyExtractor={(item: Podcast) => item.uuid}
                renderItem={({ item }) => <PodcastCard podcast={item} />}
                showsVerticalScrollIndicator={false}
            />
            <Nav />
            
        </View>
    );
}
