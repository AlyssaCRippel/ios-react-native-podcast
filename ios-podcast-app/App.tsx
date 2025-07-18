import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PodcastScreen from './screens/popular_podcasts_screen';
import PodcastDetailsScreen from './screens/podcast_details_screen';
import { RootStackParamList } from './navigation/types';
import './global'; 

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="PopularPodcasts"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen 
            name="PopularPodcasts" 
            component={PodcastScreen} 
          />
          <Stack.Screen 
            name="PodcastDetails" 
            component={PodcastDetailsScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
