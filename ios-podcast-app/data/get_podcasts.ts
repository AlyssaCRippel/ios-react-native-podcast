
import { useQuery } from '@tanstack/react-query';
import { graphQLClient } from '../clients/graphql_client';
import {GetPopularContentResponse } from './types';
import { POPULAR_PODCASTS_QUERY } from './queries';

export const useGetPodcasts = () => {
  return useQuery({
    queryKey: ['popularPodcasts'],
    queryFn: async (): Promise<GetPopularContentResponse> => {
      const res = await graphQLClient.request<{ getPopularContent: GetPopularContentResponse }>(
        POPULAR_PODCASTS_QUERY
      );
      return res.getPopularContent;
    },
  });
};



