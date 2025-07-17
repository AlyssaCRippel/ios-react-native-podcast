import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PodcastScreen from './screens/popular_podcasts_screen';
import './global'; 

const queryClient = new QueryClient();


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PodcastScreen />
    </QueryClientProvider>
  );
}
