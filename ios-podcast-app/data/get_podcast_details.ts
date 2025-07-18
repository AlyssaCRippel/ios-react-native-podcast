import { useQuery } from '@tanstack/react-query';
import { graphQLClient } from '../clients/graphql_client';
import { PodcastDetails } from './types';
import { createPodcastDetailsQuery } from './queries';

export const useGetPodcastDetails = (uuid: string) => {
  return useQuery({
    queryKey: ['podcastDetails', uuid],
    queryFn: async (): Promise<PodcastDetails> => {
      try {
        const query = createPodcastDetailsQuery(uuid);
        const res = await graphQLClient.request<{ getPodcastSeries: PodcastDetails }>(query);
        return res.getPodcastSeries;
      } catch (error) {
        throw error;
      }
    },
    enabled: !!uuid, 
  });
};


